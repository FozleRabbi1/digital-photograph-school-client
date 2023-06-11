import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../HooksFile/useAdmin";
import { AuthContext } from "../AuthProviderFile/AuthProvider";

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const [isAdmin, adminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);

    if(loading || adminLoading){
        return <p>loading...................</p>
    }

    if (!user || !isAdmin.admin) {
        return <Navigate to="/" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default AdminRoute;