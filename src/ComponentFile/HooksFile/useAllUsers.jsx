import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";

const useAllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)

    // const { data: users = [], refetch } = useQuery({
    //     queryKey: ['users', user?.email],
    //     enabled: !!user?.email && !!localStorage.getItem("access-token"),   // TODO
    //     queryFn: async () => {
    //         const response = await axiosSecure.get("/users")
    //         return response.data;
    //     },
    // })

    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["allUsers", user?.email],
        queryFn: async () => {
            const res = await fetch("https://digital-photograph-school-server.vercel.app/allUsers");
            return res.json();      // =============>>>  useAxiosSecure use korle res.json() use kora lagto na  use axios er moddhei convart hoye jeto
        }
    })
    console.log(users)

    return [users, refetch]

}
export default useAllUsers;

