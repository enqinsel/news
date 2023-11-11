import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

import NotFound from "../pages/not-found/index.jsx";
import MainLayout from "../layouts/main/index.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
             index: true,
             element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },

            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])

export default routes