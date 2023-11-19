/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import { useContext } from "react";
// import { Authcontext } from "../provider/Authprovider";
import Swal from "sweetalert2";
import axios from "axios";
import useaxios from "../hooks/useaxios";
import useCarts from "../hooks/usecarts";

const Foodcards = ({ item }) => {
    const { user } = useAuth()
    const { _id, name, recipe, image, category, price } = item;
    // const {user} = useContext(Authcontext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useaxios();
    const [, refetch] = useCarts()
    

    const handlecart = (food) => {
        if(user && user.email){
            console.log(user.email, food)
            const cartItem = {
                menuID: _id,
                email: user.email,
                name, image, price, category, recipe
            }

            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} has been added to the cart`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                      refetch()
                }
            })
        }
        else{
            Swal.fire({
                title: "Your are not logged in!!",
                text: "Please login to add carts",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ok, Let's Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }

    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt={name} className="w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p className="font-medium">{recipe}</p>
                    <div className="card-actions">
                        <button onClick={handlecart} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-black rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Add to Cart
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodcards;