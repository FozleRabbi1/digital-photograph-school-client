import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";

const useSelectCourseData = () => {
    const [axiosSecure] = useAxiosSecure()

    const { user, loading } = useContext(AuthContext)
    const token = localStorage.getItem("access-token")
    console.log(user?.email)

    const { data: selecteddatas = [], refetch } = useQuery({
        queryKey: ['course', user?.email],
        // enabled: !!user?.email && !!localStorage.getItem("access-token") && !!loading,   // TODO
        enabled: !!user?.email && !!localStorage.getItem("access-token"),   // TODO
        queryFn: async () => {
            const response = await axiosSecure(`http://localhost:5000/course?email=${user?.email}`)
            console.log(response)
            return response.data;
        },
    })
    return [selecteddatas, refetch, loading]



    // const { data: selecteddatas = [], refetch } = useQuery({
    //     queryKey: ['course', user?.email],
    //     // enabled: !!user?.email && !!localStorage.getItem("access-token") && !!loading,   // TODO
    //     enabled: !!user?.email && !!localStorage.getItem("access-token"),   // TODO
    //     queryFn: async () => {
    //         const response = await fetch(`http://localhost:5000/course?email=${user?.email}`, {
    //             headers: {
    //                 authorization: `bearer ${token}`
    //             }
    //         })
    //         return response.json();
    //     },
    // })
    // return [selecteddatas, refetch, loading]



    // const { data: Selecteddatas = [], refetch } = useQuery(['course'], async () => {
    //     const res = await axiosSecure.get(`/course?email=${user?.email}`)
    //     return res.data;
    // })

    // console.log(Selecteddatas)


    // return [Selecteddatas, refetch, loading]



}
export default useSelectCourseData;