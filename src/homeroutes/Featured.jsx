import Sectiontitle from "../components/Sectiontitle";

const Featured = () => {
    return (
        <div className="image2 bg-fixed">
            <div className="bg-gradient-to-r from-[#15151575] to-[#151515B3] pt-10 pb-20">
                <Sectiontitle heading={"FROM OUR MENU"}
                    subheading={"---Check it out---"}>
                </Sectiontitle>
                <div className="flex items-center justify-center gap-20 px-40">
                    <img className="w-[500px]" src="https://i.ibb.co/rFCJhSJ/featured.jpg" alt="" />
                    <div className="text-white">
                        <h1 className="text-2xl font-semibold">March 20, 2023 <br />
                            WHERE CAN I GET SOME?</h1>
                            <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn btn-outline text-white">Read more</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;