import { createBrowserRouter } from "react-router-dom";
import Main from "./LayOutiFile/Main";
import Home from "./PagesFile/HomeFile/HomeFile/Home";
import Login from "./PagesFile/LoginFile/Login";
import Register from "./PagesFile/RegisterFile/Register";


export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },

            // { path: "menu", element: <Menu></Menu> },
            // {
            //     path: "order/:category", element:
            //         // <RequireAuth>
            //         <Order></Order>
            //     // </RequireAuth>
            // },
            { path: "login", element: <Login></Login> },
            { path: "register", element: <Register></Register> }
        ]
    }
])