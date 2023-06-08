import { useContext } from "react";
import Header from "../HeaderFile/Header";
import { ThimProviders } from "../../../ThimProviderFile/ThimProvider";

const Home = () => {
    const {bgThim} = useContext(ThimProviders)
    return (
        <div className={`${bgThim === "dark" ? " border-t-[1px] " : ""}`}>

            <Header></Header>
            this is home
            
        </div>
    );
};

export default Home;