import { Link } from 'react-router-dom';
// import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <Typography variant="h2">Blogs@24</Typography> */}
            <h1>Blogs@24</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link
                    to="/create"
                    style={{
                        color: 'white',
                        backgroundColor: '#f1356d',
                        borderRadius: '8px',
                    }}
                >
                    Create New Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
