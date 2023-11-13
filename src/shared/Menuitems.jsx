/* eslint-disable react/prop-types */

const Menuitems = ({item}) => {

    // eslint-disable-next-line no-unused-vars
    const {_id, name, recipe, image, category, price} = item;

    return (
        <div>
            <div className="flex justify-center gap-3">
                <img style={{
                    borderRadius: '0px 200px 200px 200px'
                }} className="w-32" src={image} alt="" />
                <div>
                    <h1 className="text-xl text-black font-bold uppercase">{name} --------</h1>
                    <p className="pt-3 text-base">{recipe}</p>
                </div>
                <p className="text-amber-500 font-medium">{price}</p>
            </div>
        </div>
    );
};

export default Menuitems;