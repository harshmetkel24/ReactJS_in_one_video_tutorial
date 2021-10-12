import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './useFetch';
import EditBlog from './editBlog';

const BlogDetails = ({ dark }) => {
    const { id } = useParams();
    const [editing, setEditing] = useState(false);
    const {
        data: blog,
        error,
        isPending,
    } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        });
    };

    const handleEdit = () => {
        setEditing(true);
    };

    return (
        <div className="blog-details">
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
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p
                        style={
                            dark
                                ? {
                                      color: 'white',
                                  }
                                : {}
                        }
                    >
                        Written by {blog.author}
                    </p>
                    <div
                        style={
                            dark
                                ? {
                                      color: 'white',
                                  }
                                : {}
                        }
                    >
                        {blog.body}
                    </div>
                    <button
                        onClick={handleClick}
                        style={{ padding: '0.5em', width: '70px' }}
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => handleEdit()}
                        style={{
                            marginLeft: '2em',
                            padding: '0.5em',
                            width: '70px',
                        }}
                    >
                        Edit
                    </button>
                </article>
            )}
            {editing && <EditBlog blog={blog} />}
        </div>
    );
};

export default BlogDetails;
