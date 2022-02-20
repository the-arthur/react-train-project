import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Error from "../pages/Error"
import PostPage from "../pages/PostPage"
import Posts from "../pages/Posts"


export const routes = [
    { path: "/", element: <Posts /> },
    { path: "/about", element: <About /> },
    { path: "/posts/:id", element: <PostPage />, exact: true },
    { path: "/posts", element: <Posts />, exact: true },
    { path: "/404", element: <Error /> },
    { path: "*", element: <Navigate replace to="/404" /> }
]