import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useInstructtorSetCourse = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: instructorSetCourse, isLoading: instructorLoading, refetch } = useQuery(['instructorSetCourse'], async () => {
        const res = await axiosSecure(`/users/instructorSetCourse/${user?.email}`)
        return res.data;
    })
    return [instructorSetCourse, refetch, instructorLoading]
}

export default useInstructtorSetCourse;