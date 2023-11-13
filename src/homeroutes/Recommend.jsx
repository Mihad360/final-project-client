/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Recommend = ({ item }) => {

    const { _id, name, recipe, image, category, price } = item;

    return (
        <div>
            <div className="card bg-base-200 shadow-xl">
                <figure className="">
                    <img  src={image} alt="Foods" className="w-full" />
                </figure>
                <div className="card space-y-3 p-5 items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-justify">{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommend;