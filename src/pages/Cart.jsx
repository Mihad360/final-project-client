import { Link } from "react-router-dom";
import useCarts from "../hooks/usecarts";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useaxios from "../hooks/useaxios";

const Cart = () => {

    const [cart,refetch] = useCarts()
    const totalprice = cart.reduce((total, currenttotal) => total + currenttotal.price, 0)
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
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        console.log(res.data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your cart has been deleted.",
                            icon: "success"
                          });
                          refetch()
                    }
                })
            
            }
          });
    }

    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-12">
                <div className="bg-white p-5 flex justify-between items-center text-2xl rounded-t-lg font-medium">
                    <h1>Total orders: {cart.length} </h1>
                    <h1>total price: ${totalprice}</h1>
                    <Link><button className="btn btn-warning">Pay</button></Link>
                </div>
                <div className=" bg-white rounded-t-none  px-5 overflow-x-auto">
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
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                cart.map((item, index) => <tbody key={item._id}>
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
                                            
                                            <h1>{item.name}</h1>
                                        </td>
                                        <td>{item.price}</td>
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

export default Cart;