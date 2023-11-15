import { Outlet, useLocation } from "react-router-dom";
import Footer from "../homeroutes/Footer";
import Navbar from "../homeroutes/Navbar";

const Layout = () => {

    const location = useLocation()
    console.log(location)
    const nofooter = location.pathname.includes('/login') || location.pathname.includes('/signup')

    return (
        <div className="font">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                {nofooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Layout;