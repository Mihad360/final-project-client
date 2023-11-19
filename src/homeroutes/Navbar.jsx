import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";
import { useContext } from 'react'
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import { BsCartFill } from "react-icons/bs";
import useCarts from "../hooks/usecarts";

const Navbar = () => {

    const { user, logout } = useContext(Authcontext)
    const [cart] = useCarts()

    const handlelogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: "Logged out!",
                    text: "Logged out successfully",
                    icon: "success"
                });
            })
            .catch(() => {

            })
    }

    const links = <div>
        <div className="flex items-center gap-2 text-white">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-hidden text-amber-500 uppercase font-bold" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-hidden text-amber-500 uppercase font-bold" : ""
                    }
                >
                    Contact us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-hidden text-amber-500 uppercase font-bold" : ""
                    }
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/menu"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-hidden text-amber-500 uppercase font-bold" : ""
                    }
                >
                    Our Menu
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/shop"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-hidden text-amber-500 uppercase font-bold" : ""
                    }
                >
                    Our Shop
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/cart"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-hidden text-amber-500 uppercase font-bold" : ""
                    }
                >
                    <button className="btn btn-outline text-white">
                        <p><BsCartFill /></p>
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </NavLink>
            </li>
        </div>
    </div>

    return (
        <div>
            <div className="navbar px-10 fixed z-10 text-white bg-opacity-30 bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <h1 className="normal-case text-xl font-bold">BISTRO BOSS <br /> Restaurant</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <div className="text-white">
                        {
                            user ? <div className="flex items-center gap-1">
                                <p>{user.displayName}</p>
                                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                            </div> : <p className="text-3xl"><CgProfile /></p>
                        }
                    </div>
                    <img className="w-14 pr-3" src="https://i.ibb.co/MGtCm7R/151-1511569-cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" alt="" />
                    {
                        user ? <Link >
                            <button onClick={handlelogout} className="btn btn-outline  text-white">Sign out</button>
                        </Link>
                            : <Link to='/login'>
                                <button className="btn btn-outline text-white">Sign in</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;