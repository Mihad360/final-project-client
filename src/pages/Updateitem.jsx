import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useaxios from "../hooks/useaxios";
import Swal from "sweetalert2";

const image = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image}`;

const Updateitem = () => {

    const {name, category, recipe, price, _id} = useLoaderData()
    const { register, handleSubmit } = useForm()

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useaxios()

    const onSubmit = async(data) => {
        console.log(data)
        const imageInfo = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageInfo, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }
            const menu = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menu.data)
            if(menu.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been updated`,
                    showConfirmButton: false,
                    timer: 2000
                  });
            }
        }
        console.log(res.data)
    }

    return (
        <div className="bg-white min-h-screen">
            <h1 className="text-3xl text-center py-6 font-semibold">Update item</h1>
            <div className="px-24 pb-20">
                <div className="bg-gray-100 p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input {...register('name')} type="text" placeholder="Recipe name" className="input input-bordered w-full" defaultValue={name} />
                        <div className="flex items-center justify-center gap-10 py-3">
                            <div>
                                <label className="label">
                                    <span className="label-text">Category*</span>
                                </label>
                                <select defaultValue={category} {...register('category')} className="select select-bordered w-[500px]">
                                    <option disabled >Select a category</option>
                                    <option value="salad">Salad</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input {...register('price')} type="text" placeholder="Price" className="input input-bordered w-[500px]" defaultValue={price} />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <input {...register('recipe')} type="text" placeholder="Recipe Details" className="input input-bordered w-full pb-16 pt-5" defaultValue={recipe} />
                        </div>

                        <div className="pt-3 pb-5 form-control">
                        <input {...register('image')} type="file" className="file-input w-full max-w-xs" />
                        </div>

                        <div className="text-center pt-6">
                        <button className="btn btn-warning">Update Recipe Details</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Updateitem;