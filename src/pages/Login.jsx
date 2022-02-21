

import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>
                Личный кабинет
            </h1>
            <form action="" type="submit" onSubmit={login}>
                <MyInput type="text" placeholder="введите логин" />
                <MyInput type="password" placeholder="введите пароль" />
                <MyButton type="submit">Войти</MyButton>
            </form>
        </div>
    )
}



export default Login