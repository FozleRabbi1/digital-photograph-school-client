import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: adminLoading } = useQuery(['isAdmin'], async () => {
        const res = await axiosSecure(`/users/admin/${user?.email}`)
        return res.data;
    })
    return [isAdmin, adminLoading]
}

export default useAdmin;