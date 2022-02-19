import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Error from '../../../pages/Error';
import About from '../../../pages/About';
import Posts from '../../../pages/Posts';
import PostPage from '../../../pages/PostPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:id" exact element={<PostPage />} />
            <Route path="/posts" exact element={<Posts />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
    )
}

export default AppRouter