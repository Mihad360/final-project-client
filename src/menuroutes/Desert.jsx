
// import Sectiontitle from "../components/Sectiontitle";
import { Link } from "react-router-dom";
import useMenu from "../hooks/Usemenu";
import Menuitems from "../shared/Menuitems";

const Desert = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'dessert')
    

    return (
        <div className="px-20 pt-12 pb-20">
            <div className="flex justify-center pb-20">
                <div className="grid grid-cols-2 gap-6">
                    {
                        popular.map(item => <Menuitems key={item._id} item={item}></Menuitems>)
                    }
                </div>
            </div>
            <div className="text-center">
            <Link to='/shop'><button className="text-center font-semibold text-lg border-b-2 border-black w-96 btn pb-3 ">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default Desert;