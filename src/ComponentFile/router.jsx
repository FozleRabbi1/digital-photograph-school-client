import { createBrowserRouter } from "react-router-dom";
import Main from "./LayOutiFile/Main";
import Home from "./PagesFile/HomeFile/HomeFile/Home";
import Login from "./PagesFile/LoginFile/Login";
import Register from "./PagesFile/RegisterFile/Register";
import Dashboard from "./LayOutiFile/Dashboard";
import PrivateRoute from "./Privateroute/PrivateRoute";
import Classess from "./PagesFile/ClassessFile/Classess";
import AllInstructor from "./PagesFile/InstructorFilePage/AllInstructor";
import SelectedClass from "./Dashboard/StudentDashbord/SelectedClass/SelectedClass";
import EnrolledClass from "./Dashboard/StudentDashbord/EnrolledClass";
import MyClasses from "./Dashboard/InstructorDashbord/MyClasses";
import AddClass from "./Dashboard/InstructorDashbord/AddClass";
import ManageUser from "./Dashboard/AdminDashboard/ManageUser";
import ManageClasses from "./Dashboard/AdminDashboard/ManageClasses";


export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "classes", element: <Classess></Classess> },
            { path: "instructors", element: <AllInstructor></AllInstructor> },
            { path: "login", element: <Login></Login> },
            { path: "register", element: <Register></Register> }
        ]
    },
    {
        path: "dashboard", element:
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>,
        children: [
            { path: "selectedClass", element : <SelectedClass></SelectedClass> },
            { path: "exrolledClass", element : <EnrolledClass></EnrolledClass> },
            { path: "addedClass", element : <AddClass></AddClass> },
            { path: "myClasses", element : <MyClasses></MyClasses> },
            { path: "manageUser", element : <ManageUser></ManageUser> },
            { path: "managClass", element :<ManageClasses></ManageClasses> },
        ]
    }
])