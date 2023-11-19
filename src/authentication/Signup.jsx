import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Signup = () => {

    const axiosPublic = useAxiosPublic()

    const {createuser} = useContext(Authcontext)
    const navigate = useNavigate()

    const {
        register, handleSubmit,reset, formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createuser(data.email, data.password)
        .then(result => {
            result.user.displayName = data.name
             result.user.photoURL = data.photo
            const loggeduser = result.user;
            console.log(loggeduser)
            
              updateProfile(result.user, {
                displayName: data.name,
                photoURL: data.photo
              })
              .then(() => {
                const userProfile = {
                    name: data.name,
                    email: data.email,
                }
                axiosPublic.post('/users', userProfile)
                .then(res => {
                    if(res.data.insertedId){
                        Swal.fire({
                            title: "Signed up!",
                            text: "Successfully signed up",
                            icon: "success"
                          });
                          reset()
                          navigate('/')
                    }
                })
              })
              
              .catch(error => {
                console.log(error)
              })
        })
    }

    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Sign up</title>
            </Helmet>
            <div className="flex flex-row-reverse justify-center items-center pt-20 gap-10">
                <div>
                    <img className="w-[500px]" src="https://i.ibb.co/yNBnQWY/authentication1.png" alt="" />
                </div>
                <div className="font-semibold">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-[#D1A054]">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" className="input
                                input-bordered" name="photo" {...register("photo",)} />
                                    {/* <div className="py-1">
                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                    </div> */}
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input
                                input-bordered" name="name" {...register("name", { required: true })} />
                                    <div className="py-1">
                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email address" className="input
                                input-bordered" name="email" {...register("email", { required: true })} />
                                    <div className="py-1">
                                        {errors.email && <span className="text-red-500">This field is required</span>}
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className="input input-bordered" name="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /^(?=.*[A-Z])(?=.*[^\w\s])(?!.*\s).{6,}$/
                                    })} />
                                    <div className="py-1">

                                        {errors.password?.type === "required" && (
                                            <p className="text-red-600">This field is required</p>
                                        )}
                                        {errors.password?.type === "minLength" && (
                                            <p className="text-red-600">Password must have 6 characters</p>
                                        )}
                                        {errors.password?.type === "pattern" && (
                                            <p className="text-red-600">Password must have 6 characters with one uppercase and a special character</p>
                                        )}

                                    </div>

                                    <div>
                                        <p>Already have an Account? <Link to='/login' className="text-amber-500 font-bold">Please Login</Link></p>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-warning font-bold">Sign Up</button>
                                </div>

                            </form>
                            <div className="px-8 pb-5">
                                <button className="btn btn-outline btn-warning w-full"><FcGoogle></FcGoogle></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;