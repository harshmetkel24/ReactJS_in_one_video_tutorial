import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const EditBlog = ({ blog }) => {
    const history = useHistory();
    const handleEdit = () => {
        const d = new Date();
        const newBlog = {
            title: newTitle,
            body: newBody,
            author: blog.author,
            updatedOn: d.toDateString(),
        };
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
            <h1
                style={{
                    textDecoration: 'underline',
                    marginBottom: '1em',
                    fontSize: '1.8em',
                }}
            >
                Edit Blog
            </h1>
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
                style={{
                    mtargin: '1em',
                    borderRadius: '0.5em',
                    padding: '0.2em 0.5em',
                    fontSize: '1.1em',
                }}
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
                    width: '700px',
                    maxWidth: '800px',
                    height: '10em',
                    margin: 'auto',
                    borderRadius: '0.8em ',
                    padding: '0.5em 1em',
                }}
                onChange={(e) => {
                    setNewBody(e.target.value);
                }}
            ></textarea>
            <button
                onClick={() => handleEdit()}
                style={{
                    margin: '1em auto 1em auto',
                    padding: '0.5em',
                    width: '70px',
                }}
            >
                Save
            </button>
        </div>
    );
};

export default EditBlog;
