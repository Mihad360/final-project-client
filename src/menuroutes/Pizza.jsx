// import Sectiontitle from "../components/Sectiontitle";
import useMenu from "../hooks/Usemenu";
import Menuitems from "../shared/Menuitems";

const Pizza = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'pizza')

    return (
        <div className="px-20 pt-12 pb-20">
            {/* <Sectiontitle heading={"FROM OUR MENU"}
            subheading={"---Check it out---"}>
            </Sectiontitle> */}
            <div className="flex justify-center pb-20">
                <div className="grid grid-cols-2 gap-6">
                    {
                        popular.map(item => <Menuitems key={item._id} item={item}></Menuitems>)
                    }
                </div>
            </div>
            <h1 className="text-center font-semibold text-xl border-b-2 border-black w-96 mx-auto pb-3">ORDER YOUR FAVOURITE FOOD</h1>
        </div>
    );
};

export default Pizza;