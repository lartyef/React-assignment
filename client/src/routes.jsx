import {createBrowserRouter} from "react-router-dom"

import NavBar from "./Components/NavBar/NavBar"

import StorePage from "./modules/pages/StorePage"


export const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <StorePage/>
    // },
    {
        path: '/Navbar',
        element: <NavBar/>
    }

   
])