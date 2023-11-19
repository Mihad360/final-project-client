import { useQuery } from "@tanstack/react-query";
import Sectiontitle from "../components/Sectiontitle";
import useaxios from "../hooks/useaxios";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {

    const axiosSecure = useaxios()

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.data
        },
        
    })

    const handlemakeadmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 2000
                  });
                  refetch()
                  
            }
        })
    }

    const handledeleteuser = user => {
        console.log(user)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        console.log(res.data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "The user has been removed.",
                            icon: "success"
                          });
                          refetch()
                    }
                })
            
            }
          });
    }

    return (
        <div className="bg-gray-100 min-h-screen px-12">
            <Sectiontitle heading={"MANAGE ALL USERS"}
                subheading={"---How many??---"}>
            </Sectiontitle>
            <div className="bg-white p-5">
                <div>
                    <h1 className="text-2xl font-medium">Total users: { users.length }</h1>
                    <div>
                    <table className=" table overflow-x-hidden">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#D1A054] rounded-t-lg">
                                    <th>
                                        <h1></h1>
                                    </th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ROLE</th>
                                    <th>ACTION</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                users.map((user, index) => <tbody key={user._id}>
                                    {/* row 1 */}
                                    <tr>
                                        <th className="text-xl">
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="">
                                                    <h1 className="text-black text-xl font-bold">{user.name}</h1>
                                                </div>
                                                <div>
                                                    
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            
                                            <h1 className="text-lg font-semibold">{user.email}</h1>
                                        </td>
                                        <td>{user.role === 'admin' ? <p className="text-amber-500 text-xl font-bold">Admin</p> : <button onClick={()=>handlemakeadmin(user)} className="text-2xl btn btn-warning text-white"><FaUsers /></button>}</td>
                                        <th>
                                            <button onClick={()=>handledeleteuser(user._id)} className="text-2xl btn btn-error text-white"><RiDeleteBin5Fill /></button>
                                        </th>
                                    </tr>
                                </tbody>)
                            }
    
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allusers;