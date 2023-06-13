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
import Payment from "./Dashboard/StudentDashbord/Payment";
import AdminRoute from "./Privateroute/AdminRoute";
import InstructorRoute from "./Privateroute/InstructorRoute";
import Feedback from "./Dashboard/AdminFeedBack/Feedback";
import DashWelcome from "./Dashboard/DashbordWelcomePage/DashWelcome";
import EnroledClass from "./Dashboard/AllUser/EnroledClass";
import NotFound from "./SharedFile/NotFoundFile/NotFound";


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
                {/* <DashWelcome></DashWelcome> */}
            </PrivateRoute>,
        children: [
            {
                path: "welcome", element:
                    <PrivateRoute>
                        <DashWelcome></DashWelcome>
                    </PrivateRoute>
            },
            {
                path: "selectedClass", element:
                    <PrivateRoute>
                        <SelectedClass></SelectedClass>
                    </PrivateRoute>
            },
            {
                path: "enroledClass", element:
                    <PrivateRoute>
                       <EnroledClass></EnroledClass>
                    </PrivateRoute>
            },
            {
                path: "payment/:id", element:
                    <PrivateRoute>
                        <Payment></Payment>
                    </PrivateRoute>
            },
            {
                path: "addedClass", element:
                    <InstructorRoute>
                        <AddClass></AddClass>
                    </InstructorRoute>
            },
            {
                path: "myClasses", element:
                    <InstructorRoute>
                        <MyClasses></MyClasses>
                    </InstructorRoute>
            },
            {
                path: "manageUser", element:
                    <AdminRoute>
                        <ManageUser></ManageUser>
                    </AdminRoute>
            },
            {
                path: "managClass", element:
                    <AdminRoute>
                        <ManageClasses></ManageClasses>
                    </AdminRoute>
            },
            {
                path: "feedBack/:id", element:
                    <AdminRoute>
                        <Feedback></Feedback>
                    </AdminRoute>
            },
        ]
    },
    {
        path : "*", element : <NotFound></NotFound>
    }
])