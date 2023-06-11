import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProviderFile/AuthProvider";
import useInstructor from "../HooksFile/useInstructor";

const InstructorRoute = ({ children }) => {
    const location = useLocation();
    const [isInstructor, instructorLoading] = useInstructor();
    const { user, loading } = useContext(AuthContext);

    if (loading || instructorLoading) {
        return <p>loading...................</p>
    }

    if (!user || !isInstructor.instructor) {
        return <Navigate to="/" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default InstructorRoute;