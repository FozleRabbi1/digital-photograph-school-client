import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectCourseData = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: Selecteddatas = [], refetch, loading } = useQuery(['course'], async () => {
        const res = await axiosSecure.get("/course")
        return res.data;
    })

    // console.log(Selecteddatas)

    return [Selecteddatas, refetch, loading]
}
export default useSelectCourseData;