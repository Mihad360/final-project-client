import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <div>
        <div className="flex items-center gap-3 text-white">
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
        </div>
    </div>

    return (
        <div>
            <div className="navbar px-10 fixed z-10 text-white bg-opacity-20 bg-black">
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
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-14 pr-3" src="https://i.ibb.co/MGtCm7R/151-1511569-cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" alt="" />
                    <button className="btn btn-ghost">Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;