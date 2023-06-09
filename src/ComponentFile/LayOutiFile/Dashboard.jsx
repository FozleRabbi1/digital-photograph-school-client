import { useContext } from "react";
import Nav from "../SharedFile/NavBarFile/Nav";
import { ThimProviders } from "../ThimProviderFile/ThimProvider";

const Dashboard = () => {
    const {bgThim} = useContext(ThimProviders)
    return (
        <div className={`${bgThim === "dark" ? "bg-gray-900 text-white" : "bg-white"} `}>

            <Nav></Nav>

            this is dash board


        </div>
    );
};

export default Dashboard;