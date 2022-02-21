import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    return (
        <div className="navbar">
            <MyButton onClick={() => setIsAuth(false)}>
                Выйти
            </MyButton>
            <div className="navbar-item">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
                <Link to="404">404</Link>
            </div>
        </div>
    )
}

export default Navbar