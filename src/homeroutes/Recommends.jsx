import { useEffect, useState } from "react";
import Sectiontitle from "../components/Sectiontitle";
import Recommend from "./Recommend";

const Recommends = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(item => item.category === 'offered')
            setMenu(popular)
        })
    },[])

    return (
        <div>
            <Sectiontitle heading={"CHEF RECOMMENDS"}
            subheading={"---Should Try---"}>
            </Sectiontitle>
            <div className="flex justify-center px-20 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        menu.map(item => <Recommend key={item._id} item={item}></Recommend>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recommends;