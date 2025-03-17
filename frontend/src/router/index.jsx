import {createBrowserRouter} from "react-router-dom";

import Home from '../pages/home.jsx';
export const router =  createBrowserRouter([
    {
        path: '/home',
        element:<Home/>
    },
    {
        path: '/login',
        element: 'hi from login page'
    },
    {
        path: '/signup',
        element: 'hi from signup page'
    },
    {
        path:'*',
        element:<p>Not Found</p>
    }
])
