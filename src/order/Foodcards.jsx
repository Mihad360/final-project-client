/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Foodcards = ({ item }) => {

    const { _id, name, recipe, image, category, price } = item;

    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt={name} className="w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p className="font-medium">{recipe}</p>
                    <div className="card-actions">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-black rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Add to Cart
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodcards;