import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Error from '../../../pages/Error';
import About from '../../../pages/About';
import Posts from '../../../pages/Posts';
import PostPage from '../../../pages/PostPage';
import { routes } from '../../../router/router';

const AppRouter = () => {
    return (
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
    )
}

export default AppRouter