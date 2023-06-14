import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    // const { data: isInstructor, isLoading: instructorLoading } = useQuery(['isInstructor'], async () => {
    //     const res = await axiosSecure(`/users/instructor/${user?.email}`)
    //     return res.data;
    // })
    const { data: isInstructor, isLoading: instructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !!user?.email,   // TODO
        queryFn: async () => {
            const res = await axiosSecure(`/users/instructor/${user?.email}`)
            return res.data;
        },
    })

    return [isInstructor, instructorLoading]
}

export default useInstructor;