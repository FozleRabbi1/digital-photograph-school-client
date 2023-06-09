import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProviderFile/AuthProvider";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    console.log(user, loading)

    if(loading){
        return <p>loading...................</p>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;