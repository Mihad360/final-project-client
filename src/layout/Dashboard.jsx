import { BsCartFill } from "react-icons/bs";
import { IoIosHome, IoMdHome } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { MdManageAccounts, MdOutlineRestaurant, MdPayments } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineMenu } from "react-icons/md";
import { FaBook, FaShoppingBag, FaUsers } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054] font">
                <ul className="text-black font-semibold p-5 space-y-3">
                    {
                        isAdmin ? <>
                        <li className="flex items-center gap-2 hover:underline">
                        <IoMdHome />
                        <NavLink
                        to="/dashboard/adminhome"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        Admin Home
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <MdOutlineRestaurant />
                        <NavLink
                        to="/dashboard/additems"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        add items
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <MdManageAccounts />
                        <NavLink
                        to="/dashboard/manageitems"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        manage items
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <FaBook />
                        <NavLink
                        to="/dashboard/managebookings"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        Manage bookings
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <FaUsers />
                        <NavLink
                        to="/dashboard/allusers"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        all users
                    </NavLink></li>
                        </> :
                        <>
                        <li className="flex items-center gap-2 hover:underline">
                    <IoIosHome />
                        <NavLink
                        to="/dashboard/userhome"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        User Home
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <SlCalender />
                        <NavLink
                        to="/dashboard/reservation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        Reservation
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <MdPayments />
                        <NavLink
                        to="/dashboard/paymenthistory"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        Payment history
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <BsCartFill />
                        <NavLink
                        to="/dashboard/cart"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        My cart
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <MdOutlinePreview />
                        <NavLink
                        to="/dashboard/reviews"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        Add review
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <TbBrandBooking />
                        <NavLink
                        to="/dashboard/mybookings"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        My booking
                    </NavLink></li>
                        </>
                    }

                    <div className="divider divider-black"></div>

                    <li className="flex items-center gap-2 hover:underline">
                    <IoIosHome />
                        <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        Home
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <MdOutlineMenu />
                        <NavLink
                        to="/menu"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        Menu
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <FaShoppingBag />
                        <NavLink
                        to="/shop"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        Shop
                    </NavLink></li>
                    <li className="flex items-center gap-2 hover:underline">
                    <BiSolidContact />
                        <NavLink
                        to="/contact"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white" : ""
                        }
                    >
                        Contact
                    </NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;