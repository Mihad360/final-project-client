import { Outlet } from "react-router-dom";
import Footer from "../homeroutes/Footer";
import Navbar from "../homeroutes/Navbar";

const Layout = () => {
    return (
        <div className="font">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;