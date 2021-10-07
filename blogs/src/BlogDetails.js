import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './useFetch';
import EditBlog from './editBlog';

const BlogDetails = () => {
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
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                    <button onClick={() => handleEdit()}>edit</button>
                </article>
            )}
            {editing && <EditBlog blog={blog} />}
        </div>
    );
};

export default BlogDetails;
