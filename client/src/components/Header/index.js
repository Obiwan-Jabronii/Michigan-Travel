import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>
                <Link to="/">
                    <h1>Michigan Wanders</h1>
                </Link>

                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;