import { Helmet } from "react-helmet-async";
import Banner from "../homeroutes/Banner";
import Callus from "../homeroutes/Callus";
import Featured from "../homeroutes/Featured";
import Frommenu from "../homeroutes/Frommenu";
import Order from "../homeroutes/Order";
import Recommends from "../homeroutes/Recommends";
import Testimonial from "../homeroutes/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                    <title>
                        BISTRO BOSS Restaurent
                    </title>
                </Helmet>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Order></Order>
            </div>
            <div>
                <Frommenu></Frommenu>
            </div>
            <div>
                <Callus></Callus>
            </div>
            <div>
                <Recommends></Recommends>
            </div>
            <div>
                <Featured></Featured>
            </div>
            <div>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;