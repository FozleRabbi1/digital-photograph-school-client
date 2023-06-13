import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import NotFoundAnim from "../../../ComponentFile/AllAnimation/NotFound.json"

const NotFound = () => {
    return (
        <div className="bg-green-100">


            <div className="absolute left-52 z-50">
                <Link className="btn bg-green-500 mt-20 " to={'/'}>Go Back To Home</Link>
            </div>
            <div>
                <Lottie className="h-screen" animationData={NotFoundAnim} ></Lottie>
            </div>



        </div>
    );
};

export default NotFound;