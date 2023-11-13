// import { useEffect, useState } from "react";
import Sectiontitle from "../components/Sectiontitle";
import Menuitems from "../shared/Menuitems";
import useMenu from "../hooks/Usemenu";

const Frommenu = () => {

    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('/menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popular = data.filter(item => item.category === 'popular')
    //         setMenu(popular)
    //     })
    // },[])

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div className="px-20">
            <Sectiontitle heading={"FROM OUR MENU"}
            subheading={"---Check it out---"}>
            </Sectiontitle>
            <div className="flex justify-center pb-20">
                <div className="grid grid-cols-2 gap-6">
                    {
                        popular.map(item => <Menuitems key={item._id} item={item}></Menuitems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Frommenu;