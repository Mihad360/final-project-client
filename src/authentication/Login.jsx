/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import {useEffect,useState,useContext} from 'react'
import { FcGoogle } from 'react-icons/fc';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Authcontext } from "../provider/Authprovider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {

    const {signin,googlelogin} = useContext(Authcontext)
    const [disable, setDisable] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=> {
        loadCaptchaEnginge(6); 
    },[])

    const handlegoogle = () => {
        googlelogin()
            .then(result => {
                // console.log(result)
                navigate(location?.state ? location.state : '/')
            })
            .then(error => {
                // console.log(error.message)
            })
    }

    const handlelogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signin(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            Swal.fire({
                title: "Logged in!",
                text: "Successfully logged in",
                icon: "success"
              });
              navigate(location?.state ? location.
                state : '/')
        })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha = e.target.value;
        console.log(user_captcha)
        if(validateCaptcha(user_captcha)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Login</title>
            </Helmet>
            <div className="flex justify-center items-center pt-20 gap-10">
            <div>
                <img className="w-[500px]" src="https://i.ibb.co/yNBnQWY/authentication1.png" alt="" />
            </div>
            <div className="font-semibold">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email address" className="input
                                input-bordered" name="email" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" name="password"/>
                                <label className="label">
                                <span><LoadCanvasTemplate /></span>
                                </label>
                                <input type="text" placeholder="Type captcha" className="input input-bordered" onBlur={handleValidateCaptcha} name="captcha" />
                                <div>
                                    <p>Don't have an Account? <Link to='/signup' className="text-amber-500 font-bold">Please Sign up</Link></p>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disable} className="btn btn-outline btn-warning font-bold">Login</button>
                            </div>
                            
                        </form>
                        <div className="px-8 pb-5">
                                <button onClick={handlegoogle} className="btn btn-outline btn-warning w-full"><FcGoogle></FcGoogle></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;