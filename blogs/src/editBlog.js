import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const EditBlog = ({ blog }) => {
    const history = useHistory();
    const handleEdit = () => {
        const newBlog = { title: newTitle, body: newBody, author: blog.author };
        console.log(newBlog);
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlog),
        }).then(() => {
            history.push('/');
        });
    };

    const [newTitle, setNewTitle] = useState(blog.title);
    const [newBody, setNewBody] = useState(blog.body);

    return (
        <div>
            <h1>Edit Blog</h1>
            <label
                htmlFor=""
                style={{
                    fontWeight: '800',
                    fontSize: '1.2em',
                    margin: '0.4em',
                }}
            >
                title:
            </label>
            <input
                type="text"
                style={{ mtargin: '1em' }}
                value={newTitle}
                onChange={(e) => {
                    setNewTitle(e.target.value);
                }}
            />
            <br />
            <label
                style={{
                    fontWeight: '800',
                    fontSize: '1.2em',
                    margin: '0.4em',
                }}
                htmlFor=""
            >
                Body
            </label>
            <br />
            <textarea
                value={newBody}
                style={{
                    width: '550px',
                    height: '10em',
                    margin: 'auto',
                    borderRadius: '0.8em ',
                    padding: '0.5em 1em',
                }}
                onChange={(e) => {
                    setNewBody(e.target.value);
                }}
            ></textarea>
            <button onClick={() => handleEdit()} style={{ margin: '1em' }}>
                Save
            </button>
        </div>
    );
};

export default EditBlog;
