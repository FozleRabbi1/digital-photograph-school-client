import { useContext } from "react";
import Nav from "../SharedFile/NavBarFile/Nav";
import { ThimProviders } from "../ThimProviderFile/ThimProvider";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../HooksFile/useAdmin";
import useInstructor from "../HooksFile/useInstructor";
import { AuthContext } from "../AuthProviderFile/AuthProvider";
import Footer from "../SharedFile/Footer/Footer";
import { FaRenren, FaUserShield, FaUsers } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { AiFillRead, AiTwotoneHome } from "react-icons/ai";
import { SiInstructure } from "react-icons/si";
import { MdClass, MdPlaylistAddCircle } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";

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

                                        <div className="flex justify-center"> <FaUserShield className="text-2xl text-green-900"></FaUserShield> Admin</div>

                                        <span className="text-xs text-center block m-0 p-0 "> {user.email}</span>
                                    </li>
                                    <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/manageUser"}> <FaUsers className="text-2xl "></FaUsers> Manage User</Link> </li>
                                    <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/managClass"}> <AiFillRead className=" block mt-0.5 me-1 text-xl"></AiFillRead> Manage Classes</Link> </li>
                                </>

                                : isInstructor?.instructor ?

                                    <>
                                        <li className={`${bgThim === "dark" ? "bg-indigo-300 text-white" : "bg-indigo-300"} mb-3 rounded-2xl text-xl text-center p-2`}>

                                            <div className="flex justify-center">
                                                <ImUsers className="text-2xl text-indigo-900 "></ImUsers>
                                                Instructor
                                            </div>

                                            <span className="text-xs text-center block m-0 p-0 ">{user.email}</span>
                                        </li>
                                        <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/addedClass"}> <MdPlaylistAddCircle className="text-2xl text-indigo-900 "></MdPlaylistAddCircle> Add a Class</Link> </li>
                                        <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/myClasses"}> <MdClass className="text-2xl text-indigo-900 "></MdClass> My Classes</Link> </li>
                                    </>

                                    :
                                    <>
                                        <li className={`${bgThim === "dark" ? "bg-indigo-300 text-white" : "bg-indigo-300"} mb-3 rounded-2xl text-xl text-center p-2`}>
                                            <div className="flex justify-center">
                                                <FaUsers className="text-2xl text-indigo-900 "></FaUsers>
                                                User
                                            </div>
                                            <span className="text-xs text-center block m-0 p-0 ">{user.email}</span>
                                        </li>
                                        <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700 " : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/selectedClass"}> <BiSelectMultiple className="text-2xl text-indigo-900 "></BiSelectMultiple> Selected Classes</Link> </li>
                                        <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700 " : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/dashboard/enroledClass"}> <FaRenren className="text-2xl text-indigo-900 "></FaRenren> Enrolled Classes</Link> </li>
                                    </>

                        }

                        <div className="divider"></div>
                        <>
                            <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/"}> <AiTwotoneHome className=" block mt-0.5 me-1 text-xl"></AiTwotoneHome> Home</Link> </li>
                            <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/classes"}> <AiFillRead className=" block mt-0.5 me-1 text-xl"></AiFillRead>Classes</Link> </li>
                            <li className={`${bgThim === "dark" ? "bg-gray-800 text-white hover:bg-gray-100 duration-700" : "bg-indigo-300"} mb-3 rounded-2xl`}> <Link to={"/instructors"}>  <SiInstructure className=" block mt-0.5 me-1 text-xl" ></SiInstructure> Instructor</Link> </li>
                        </>
                    </ul>

                </div>

            </div>
            <Footer></Footer>


        </div >
    );
};

export default Dashboard;