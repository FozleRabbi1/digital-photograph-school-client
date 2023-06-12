import { useContext } from "react";
import Nav from "../SharedFile/NavBarFile/Nav";
import { ThimProviders } from "../ThimProviderFile/ThimProvider";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../HooksFile/useAdmin";
import useInstructor from "../HooksFile/useInstructor";
import { AuthContext } from "../AuthProviderFile/AuthProvider";
import Footer from "../SharedFile/Footer/Footer";

const Dashboard = () => {
    const { bgThim } = useContext(ThimProviders)
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className={`${bgThim === "dark" ? "bg-gray-900 text-white" : "bg-white"} `}>

            <Nav></Nav>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    <Outlet></Outlet>
                    

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>

                <div className="drawer-side fixed ">

                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin?.admin ?
                                <>
                                    <li className={`${bgThim === "dark" ? "bg-indigo-300 text-white" : "bg-indigo-300"} mb-3 rounded-2xl font-semibold text-xl text-center p-2`}>
                                        Admin  <span className="text-xs text-center block m-0 p-0 ">{user.email}</span>
                                    </li>
                                    <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/manageUser"}>Manage User</Link> </li>
                                    <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/managClass"}>Manage Classes</Link> </li>
                                </>

                                : isInstructor?.instructor ?

                                    <>
                                        <li className={`${bgThim === "dark" ? "bg-indigo-300 text-white" : "bg-indigo-300"} mb-3 rounded-2xl text-xl text-center p-2`}>
                                            Instructor  <span className="text-xs text-center block m-0 p-0 ">{user.email}</span>
                                        </li>
                                        <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/addedClass"}>Add a Class</Link> </li>
                                        <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/myClasses"}>My Classes</Link> </li>
                                    </>

                                    :
                                    <>
                                        <li className={`${bgThim === "dark" ? "bg-indigo-300 text-white" : "bg-indigo-300"} mb-3 rounded-2xl text-xl text-center p-2`}> User
                                            <span className="text-xs text-center block m-0 p-0 ">{user.email}</span>
                                        </li>
                                        <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700 " : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/selectedClass"}>Selected Classes</Link> </li>
                                        <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700 " : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/exrolledClass"}>Enrolled Classes</Link> </li>
                                    </>

                        }

                        <div className="divider"></div>
                        <>
                            <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/"}>Home</Link> </li>
                            <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/classes"}>Classes</Link> </li>
                            <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/instructors"}>Instructor</Link> </li>
                        </>
                    </ul>

                </div>

            </div>
            <Footer></Footer>


        </div >
    );
};

export default Dashboard;