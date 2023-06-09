import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProviderFile/AuthProvider";

const SocialLogin = () => {
    const { googleSignUp } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const googleLogin = () => {
        googleSignUp()
            .then(() => {
            // .then((res) => {
                // const userData = { name: res.user.displayName, email: res.user.email }
                
                // if (res.user) {
                //     fetch("http://localhost:5000/users", {
                //         method: "POST",
                //         headers: {
                //             'Content-type': 'application/json'
                //         },
                //         body: JSON.stringify(userData)
                //     })
                //     navigate(from, { replace: true })
                // }
                navigate(from, { replace: true })
            })
    }
    return (
        <div className=" -mt-8">
            <div className="divider"></div>

            <div className=" flex justify-center -mt-4 mb-2 ">
                <button onClick={googleLogin} className="btn btn-circle bg-gray-100 btn-outline text-center">
                    <FaGoogle className="text-red-500"></FaGoogle>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;