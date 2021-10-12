import { Link } from 'react-router-dom';

const BlogList = ({ blogs, dark }) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
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
                        {console.log(blog.updatedOn, blog.title)}
                        {!blog.updatedOn ? (
                            <div
                                className="date"
                                style={
                                    dark
                                        ? {
                                              color: 'white',
                                          }
                                        : {}
                                }
                            >
                                {' '}
                                Created On: {blog.createdAt}
                            </div>
                        ) : (
                            <div
                                className="date"
                                style={
                                    dark
                                        ? {
                                              color: 'white',
                                          }
                                        : {}
                                }
                            >
                                Last edited On: {blog.updatedOn}
                            </div>
                        )}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
