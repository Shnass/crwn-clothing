import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop/" className="option">Shop</Link>
            <Link to="/shop/" className="option">Contacts</Link>
            <Link to="/signin/" className="option">Sign In</Link>
        </div>
    </div> 
)

export default Header;