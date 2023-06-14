import { useContext, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import ActiveLink from "./ActiveLink";
import { ThimProviders } from "../../ThimProviderFile/ThimProvider";
import './Nav.css'
import { AuthContext } from "../../AuthProviderFile/AuthProvider";
import { useLocation } from "react-router-dom";
import useSelectCourseData from "../../HooksFile/useSelectCourseData";
import { AiFillRead, AiOutlineLogin, AiTwotoneHome } from "react-icons/ai";
import { SiInstructure } from "react-icons/si";
import { MdDashboardCustomize } from "react-icons/md";
import { BiLogIn, BiLogOut } from "react-icons/bi";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const { bgThim } = useContext(ThimProviders)
    const { darkThim, lightThim } = useContext(ThimProviders);
    const { user, loginOut, loading } = useContext(AuthContext);
    const location = useLocation();
    const [Selecteddatas, refetch] = useSelectCourseData();

    // useEffect(() => {
    //     console.log(user?.email)
    //     refetch()
    // }, [user?.email, refetch])

    const bgThimHandlerDark = () => {
        darkThim("dark")
    }

    const bgThimHandlerLight = () => {
        lightThim("light")
    }

    const LogOutFun = () => {
        loginOut()
    }

    return (
        <div className="sticky top-0 z-50">
            <nav className={`${location?.pathname.includes("dashboard") ? "bg-indigo-300" : ""} ${bgThim === "light" ? "bg-gray-700" : "bg-gray-800"} py-1  `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex w-full items-center justify-between ">
                            <div className="flex-shrink-0 bg-black">
                                <img
                                    className=" w-16 h-16  "
                                    src="https://i.ibb.co/LYRGPrC/photography-logo-camera-logo-modern-camera-design-template-61a629a6b006a5d93947e93c81f16ce4-screen-1.jpg"
                                    alt="Workflow"
                                />

                            </div>
                            <div className="hidden md:block ">
                                <div className="ml-10 flex items-center space-x-4">


                                    <ActiveLink to={"/"} className="">
                                        <AiTwotoneHome className=" block mt-0.5 me-1 text-xl"></AiTwotoneHome>
                                        Home
                                    </ActiveLink>


                                    <ActiveLink to={"/classes"} className="">
                                        <AiFillRead className=" block mt-0.5 me-1 text-xl"></AiFillRead>
                                        Classes
                                    </ActiveLink>


                                    <ActiveLink to={"/instructors"} className="">
                                        <SiInstructure className=" block mt-0.5 me-1 text-xl" ></SiInstructure>
                                        Instructors
                                    </ActiveLink>

                                    {
                                        user &&
                                        <ActiveLink to={"/dashboard/welcome"} className="relative">
                                            <MdDashboardCustomize className=" block mt-0.5 me-1 text-xl"></MdDashboardCustomize>
                                            Dashboard

                                            <div className="badge badge-secondary bg-transparent ms-2">{Selecteddatas?.length || 0}</div>
                                        </ActiveLink>
                                    }




                                    <ActiveLink to={"/login"}>
                                        {
                                            user ? <button onClick={LogOutFun} className="flex"> <BiLogOut className=" block mt-1 me-1 text-xl"></BiLogOut> LogOut</button> : <span className="flex"> <BiLogIn className=" block mt-1 me-1 text-xl"></BiLogIn> Login </span>
                                        }

                                    </ActiveLink>


                                    <ActiveLink to={"/register"}>
                                        <AiOutlineLogin className=" block mt-0.5 me-1 text-xl"></AiOutlineLogin>
                                        Register
                                    </ActiveLink>

                                    {
                                        user && <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                                    }




                                    <label className=" text-white">
                                        {
                                            bgThim === "light" ?
                                                <svg onClick={bgThimHandlerDark} className="text-white swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                                :
                                                <svg onClick={bgThimHandlerLight} className="text-white swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                        }


                                    </label>


                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <ActiveLink to={"/"} className="">
                                    <AiTwotoneHome className=" block mt-0.5 me-1 text-xl"></AiTwotoneHome>
                                    Home
                                </ActiveLink>


                                <ActiveLink to={"/classes"} className="">
                                    <AiFillRead className=" block mt-0.5 me-1 text-xl"></AiFillRead>
                                    Classes
                                </ActiveLink>


                                <ActiveLink to={"/instructors"} className="">
                                    <SiInstructure className=" block mt-0.5 me-1 text-xl" ></SiInstructure>
                                    Instructors
                                </ActiveLink>

                                {
                                    user &&
                                    <ActiveLink to={"/dashboard/welcome"} className="relative">
                                        <MdDashboardCustomize className=" block mt-0.5 me-1 text-xl"></MdDashboardCustomize>
                                        Dashboard

                                        <div className="badge badge-secondary bg-transparent ms-2">{Selecteddatas?.length || 0}</div>
                                    </ActiveLink>
                                }




                                <ActiveLink to={"/login"}>
                                    {
                                        user ? <button onClick={LogOutFun} className="flex"> <BiLogOut className=" block mt-1 me-1 text-xl"></BiLogOut> LogOut</button> : <span className="flex"> <BiLogIn className=" block mt-1 me-1 text-xl"></BiLogIn> Login </span>
                                    }

                                </ActiveLink>


                                <ActiveLink to={"/register"}>
                                    <AiOutlineLogin className=" block mt-0.5 me-1 text-xl"></AiOutlineLogin>
                                    Register
                                </ActiveLink>

                                {
                                    user && <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                                }




                                <label className=" text-white">
                                    {
                                        bgThim === "light" ?
                                            <svg onClick={bgThimHandlerDark} className="text-white swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                            :
                                            <svg onClick={bgThimHandlerLight} className="text-white swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    }


                                </label>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>


        </div>
    );
}

export default Nav;