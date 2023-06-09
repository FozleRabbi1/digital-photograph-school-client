import { createBrowserRouter } from "react-router-dom";
import Main from "./LayOutiFile/Main";
import Home from "./PagesFile/HomeFile/HomeFile/Home";
import Login from "./PagesFile/LoginFile/Login";
import Register from "./PagesFile/RegisterFile/Register";
import Dashboard from "./LayOutiFile/Dashboard";
import PrivateRoute from "./Privateroute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "login", element: <Login></Login> },
            { path: "register", element: <Register></Register> }
        ]
    },
    {
        path: "dashboard", element:
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
    }
])