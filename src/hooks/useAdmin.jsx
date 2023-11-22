import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useaxios from "./useaxios";

const useAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = useaxios()
    const {data: isAdmin, isPending: isAdminloading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin;
        }
    })   
    return [isAdmin, isAdminloading]
}
export default useAdmin;