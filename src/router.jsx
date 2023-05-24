import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Pages/Home/Home';
import AllToys from './Components/Pages/All Toys/AllToys';
import MyToys from './Components/Pages/My Toys/MyToys';
import Blogs from './Components/Pages/Blogs/Blogs';

import SingUp from './Components/Pages/Account/Sing-up/SingUp';
import SingIn from './Components/Pages/Account/Login/SingIn';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <AllToys />
            },
            {
                path: "/my-toys",
                element: <MyToys />
            },
            {
                path: "/blgos",
                element: <Blogs />
            },
            {
                path: "/account",
                element: <>coming soon</>
            },
            {
                path: "/sing-in",
                element: <SingIn />
            },
            {
                path: "/sing-up",
                element: <SingUp />
            }
        ]
    }
])
export default router;