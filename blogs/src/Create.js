import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = ({ dark }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // default submit shoudl not happen
        const d = new Date();
        const blog = { title, body, author, createdAt: d.toDateString() };
        console.log(blog);
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog),
        }).then(() => {
            // history.go(-1);
            history.push('/');
            // after fetching data go to home
        });
    };

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label
                    style={
                        dark
                            ? {
                                  color: 'white',
                              }
                            : {}
                    }
                >
                    Blog title:
                </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label
                    style={
                        dark
                            ? {
                                  color: 'white',
                              }
                            : {}
                    }
                >
                    Blog body:
                </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label
                    style={
                        dark
                            ? {
                                  color: 'white',
                              }
                            : {}
                    }
                >
                    Blog author:
                </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
};

export default Create;
