import { Link } from 'react-router-dom';

const Navbar = ({ dark, setDark }) => {
    return (
        <nav
            className="navbar"
            style={
                dark
                    ? {
                          backgroundColor: 'black',
                          borderBottom: '2px solid #111',
                          boxShadow: '0 3px 10px 2px #fff',
                      }
                    : {}
            }
        >
            <h1>Blogs@24</h1>
            <div
                style={
                    !dark
                        ? {
                              color: 'white',
                              backgroundColor: '#333',
                              fontWeight: '500',
                              borderRadius: '8px',
                              marginLeft: '1em',
                              padding: '0.3em 0.4em',
                              cursor: 'pointer',
                          }
                        : {
                              backgroundColor: 'whitesmoke',
                              color: '#333',
                              fontWeight: '700',
                              borderRadius: '8px',
                              marginLeft: '1em',
                              padding: '0.3em 0.4em',
                              cursor: 'pointer',
                          }
                }
                onClick={() => {
                    dark ? setDark(false) : setDark(true);
                }}
            >
                Theme
            </div>
            <div className="links">
                <Link
                    to="/"
                    style={
                        dark
                            ? {
                                  color: '#fff',
                              }
                            : {}
                    }
                >
                    Home
                </Link>
                <Link
                    to="/create"
                    style={
                        !dark
                            ? {
                                  color: 'white',
                                  backgroundColor: '#0066b2',
                                  fontWeight: '500',
                                  borderRadius: '8px',
                              }
                            : {
                                  backgroundColor: '#fff',
                                  fontWeight: '700',
                                  color: '#333',
                                  borderRadius: '8px',
                              }
                    }
                >
                    Create New Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
