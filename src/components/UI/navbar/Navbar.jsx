import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-item">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
                <Link to="404">404</Link>
            </div>
        </div>
    )
}

export default Navbar