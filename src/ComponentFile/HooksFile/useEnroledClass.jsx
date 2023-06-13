import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProviderFile/AuthProvider";

const useEnroledClass = () => {
    const { user } = useContext(AuthContext)

    const { data: enroledDatas = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["enroledClass"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enroledCLass?email=${user?.email}`);
            return res.json();      // =============>>>  useAxiosSecure use korle res.json() use kora lagto na  use axios er moddhei convart hoye jeto
        }
    })
    return [enroledDatas, loading, refetch]
}
export default useEnroledClass; 