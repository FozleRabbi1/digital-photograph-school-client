import { useContext } from "react";
import { AuthContext } from "../../AuthProviderFile/AuthProvider";
import { ThimProviders } from "../../ThimProviderFile/ThimProvider";

const DashWelcome = () => {
    const { user } = useContext(AuthContext)
    const {bgThim} = useContext(ThimProviders)
    return (
        <div className={` ${bgThim === "dark" ? "bg-gray-900  " : "bg-green-100 "}h-full flex justify-center items-center`}>

            <div className="flex flex-col justify-center items-center">
                <h2 className="-mt-40 font-serif text-2xl">welcome <span className="text-red-500 text-5xl italic mx-2">{user.displayName}</span>  to the dashboard</h2>
                <small className="  ">Todo ( This site is not finished yet )</small>
            </div>

        </div>
    );
};

export default DashWelcome;