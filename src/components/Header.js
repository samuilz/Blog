import { Link } from 'react-router-dom';
import Home from './Home';
import '../Header.css';

function Header() {
    return (
            <header>
                <nav>
                    <Link to="/" element={<Home />}>Home</Link>
                    <Link to="/about-us">About us</Link>
                    <Link to="/users/login">Login</Link>
                    <Link to="/users/register">Register</Link>
                </nav>
            </header>
    );
}

export default Header;