import { RiDeleteBin5Fill } from "react-icons/ri";
import Sectiontitle from "../components/Sectiontitle";
import useMenu from "../hooks/Usemenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useaxios from "../hooks/useaxios";
import { Link } from "react-router-dom";

const Manageitems = () => {

    const [menu, , refetch] = useMenu()
    const axiosSecure = useaxios()

    const handledelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`)
                console.log(res.data)
                refetch()
                if (res.data.deletedCount > 0) {
                    console.log(res.data)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This item has been removed",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }

            }
        });
    }

    return (
        <div className="bg-gray-100">
            <Sectiontitle heading={"MANAGE ALL ITEMS"}
                subheading={"---Hurry Up!---"}>
            </Sectiontitle>
            <div className="px-20 pb-20">
                <div className=" bg-white rounded-t-none  p-5 overflow-x-auto">
                    <h1 className="text-2xl font-semibold pb-5">Total items: {menu.length}</h1>
                    <table className=" table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] rounded-t-lg">
                                <th>
                                    <h1></h1>
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            menu.map((item, index) => <tbody key={item._id}>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        <h1 className="text-xl font-bold">{item.name}</h1>
                                    </td>
                                    <td className="text-base font-medium">{item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateitem/${item._id}`}>
                                            <button className="text-2xl btn btn-warning"><FaEdit /></button>
                                        </Link>
                                    </td>
                                    <th>
                                        <button onClick={() => handledelete(item._id)} className="text-2xl btn btn-error"><RiDeleteBin5Fill /></button>
                                    </th>
                                </tr>
                            </tbody>)
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manageitems;