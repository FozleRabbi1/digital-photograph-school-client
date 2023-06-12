import { Outlet } from "react-router-dom";
import Nav from "../SharedFile/NavBarFile/Nav";
import { useContext } from "react";
import { ThimProviders } from "../ThimProviderFile/ThimProvider";
import Footer from "../SharedFile/Footer/Footer";

const Main = () => {
    const {bgThim} = useContext(ThimProviders)

    return (
        <div className={`${bgThim === "dark" ? "bg-gray-900 text-white" : "bg-white"} max-w-screen-1xl mx-auto`}>

            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            
        
        </div>
    );
};

export default Main;