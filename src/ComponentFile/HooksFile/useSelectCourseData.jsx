import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";

const useSelectCourseData = () => {
    const [axiosSecure] = useAxiosSecure()

    const { user, loading } = useContext(AuthContext)

    const { data: selecteddatas = [], refetch } = useQuery({
        queryKey: ['course', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),   // TODO
        queryFn: async () => {
            const response = await axiosSecure(`http://localhost:5000/course?email=${user?.email}`)
            return response.data;
        },
    })
    return [selecteddatas, refetch, loading]




}
export default useSelectCourseData;