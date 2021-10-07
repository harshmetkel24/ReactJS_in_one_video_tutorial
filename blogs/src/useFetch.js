import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); // this causes the fetch to abort whenever the user tries to switch to another route even before fetching the data

        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    // if it is abort error then do not send the error message
                    console.log('fetch aborted');
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                }
            });

        // abort the fetch
        return () => abortCont.abort(); // this is clean-up function of useEffect hook
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
