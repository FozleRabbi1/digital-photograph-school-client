import { useQuery } from "@tanstack/react-query";

const useCourseData = () => {

    const { data: datas = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const res = await fetch("https://digital-photograph-school-server.vercel.app/courses");
            return res.json();      // =============>>>  useAxiosSecure use korle res.json() use kora lagto na  use axios er moddhei convart hoye jeto
        }
    })
    return [datas, loading, refetch]
}
export default useCourseData;
