import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const initialData = 0;
    const [myNumber, setMyNumber] = useState(initialData);
    useEffect(() => {
        document.title = `chats(${myNumber})`;
    });
    // here if we use [] (array dependency) then the useEffect will only work for 1st time
    return (
        <>
            <div className="center_div">
                <p>{myNumber}</p>
                <div
                    className="button2"
                    onClick={() => setMyNumber(myNumber + 1)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
            </div>
        </>
    );
};

export default UseEffect;
