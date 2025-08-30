import React, {useState} from "react";
import { Link } from "react-router-dom";
const Header = ({ isLoggedIn, onLogout })=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    //console.log(isLoggedIn);
    return(
        <header className="header" >
            <div className="container">
                <div className="logo">
                <a href="/">MySite</a>
                </div>

                <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/">Home</Link></li>
                    <li className="nav__item"><Link to="/about">About Us</Link></li>
                    <li className="nav__item"><Link to="/css-map">CSS MAP</Link></li>
                    <li className="nav__item"><Link to="/contact">Contact</Link></li>
                </ul>
                </nav>
                {isLoggedIn ? (
                <>
                    <button 
                        onClick={onLogout} 
                        className="btn btn-primary rounded-pill px-3 d-none d-lg-block"
                    >
                        Logout
                    </button>
                </>
                ) : (
                    <Link 
                        to="/login" 
                        className="btn btn-primary rounded-pill px-3 d-none d-lg-block"
                    >
                        Log In
                    </Link>
                )}
                <button
                    className={`nav-toggle ${menuOpen ? 'nav-toggle--open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="hamburger"></span>
                </button>
            </div>
        </header>
    );
}
export default Header;