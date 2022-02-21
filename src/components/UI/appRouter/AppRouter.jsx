import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Error from '../../../pages/Error';
import About from '../../../pages/About';
import Posts from '../../../pages/Posts';
import PostPage from '../../../pages/PostPage';
import { routes, publicRoutes } from '../../../router/router';
import { AuthContext } from '../../../context';
import Loader from '../loader/Loader';


const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                {routes.map(route =>
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exec={route.exact}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exec={route.exact}
                    />
                )}
            </Routes>
    )
}

export default AppRouter