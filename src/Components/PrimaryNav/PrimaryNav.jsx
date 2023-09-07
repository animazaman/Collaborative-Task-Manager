import { Link } from "react-router-dom";

const PrimaryNav = () => {
    return (
        <nav className="nav-bar">
            <Link to='/'>Home</Link>
            <Link to='/sign-in'>Sign-In</Link>
            <Link to='/sign-up'>Sign-Up</Link>
        </nav>
    );
};

export default PrimaryNav;