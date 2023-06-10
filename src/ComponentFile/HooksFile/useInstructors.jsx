import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {

    const { data: instructorsDatas = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["instructors"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/instructors");
            return res.json();      // =============>>>  useAxiosSecure use korle res.json() use kora lagto na  use axios er moddhei convart hoye jeto
        }
    })
    return [instructorsDatas, loading, refetch]
}
export default useInstructors;