import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import CategoryJob from "../Pages/Home/JobCategory/CategoryJob";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/allJobs/:id',
                element: <CategoryJob></CategoryJob>,
                loader: ({ params }) => fetch(`http://localhost:5000/allJobs/${params.id}`)
            }
        ]
    }
])