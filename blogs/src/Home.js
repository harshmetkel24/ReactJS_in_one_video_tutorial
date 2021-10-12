import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = ({ dark, setDark }) => {
    const {
        error,
        isPending,
        data: blogs,
    } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && (
                <div
                    style={
                        dark
                            ? {
                                  color: 'white',
                              }
                            : {}
                    }
                >
                    {error}
                </div>
            )}
            {isPending && (
                <div
                    style={
                        dark
                            ? {
                                  color: 'white',
                              }
                            : {}
                    }
                >
                    Loading...
                </div>
            )}
            {blogs && <BlogList blogs={blogs} dark={dark} setDark={setDark} />}
        </div>
    );
};

export default Home;
