import { useContext } from "react";
import Nav from "../SharedFile/NavBarFile/Nav";
import { ThimProviders } from "../ThimProviderFile/ThimProvider";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const { bgThim } = useContext(ThimProviders)

    const student = true;
    const Instructor = false;   
    return (
        <div className={`${bgThim === "dark" ? "bg-gray-900 text-white" : "bg-white"} `}>

            <Nav></Nav>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    {
                        student ?
                            <ul className="menu p-4 w-80 h-full bg-base-200 text-indigo-content text-base font-semibold">

                                <li className={`${bgThim === "dark" ? "bg-gray-800" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/selectedClass"}>Selected Classes</Link> </li>
                                <li className={`${bgThim === "dark" ? "bg-gray-800" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/exrolledClass"}>Enrolled Classes</Link> </li>

                            </ul>
                            : Instructor ?

                                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                    <li> <Link to={"/dashboard/addedClass"}>Add a Class</Link> </li>
                                    <li> <Link to={"/dashboard/myClasses"}>My Classes</Link> </li>
                                </ul>

                                :

                                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                    <li> <Link to={"/dashboard/manageUser"}>Manage User</Link> </li>
                                    <li> <Link to={"/dashboard/managClass"}>Manage Classes</Link> </li>
                                </ul>
                    }


                </div>
            </div>


        </div>
    );
};

export default Dashboard;