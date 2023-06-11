import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";

const useAllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),   // TODO
        queryFn: async () => {
            const response = await axiosSecure(`/users`)
            return response.data;
        },
    })
    return [users, refetch]

}
export default useAllUsers;

