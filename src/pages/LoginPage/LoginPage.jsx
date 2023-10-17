import { useForm } from "react-hook-form";
import signup from "../../../public/loginAnimation.json"
import Lottie from "lottie-react"
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { GiSheikahEye, GiTemplarEye } from 'react-icons/gi';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const LoginPage = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { userLogin, googleSignIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/"

    // Handle form submission
    const onSubmit = (data) => {
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
                
                navigate(from, { replace: true })
                
            })
            .catch((err) => {
                setError(err.message);
            });
            
    };


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err);
                // toast.error('Login failed please try again');

            })
    };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    // const handleGithubSignIn = () => {
    //     githubSignIn((result) => {
    //         console.log(result);
    //         toast('successfully login with github');
    //         navigate(from, { replace: true });
    //     }).catch((err) => {
    //         setError(err);
    //         toast.error('Login failed please try again');
    //     });
    // };
    return (
        <div className="font-roboto  px-5 pb-5">
            <Helmet>
                <title>Fashion | Login</title>
            </Helmet>
            <div className="md:flex items-center justify-center  md:px-16">
                <div className="rounded-lg">
                    <Lottie className="md:w-[30rem]" animationData={signup}>

                    </Lottie>
                </div>
                <div className="w-full mt-28 h-full">
                    <div className="max-w-md mx-auto mt-5 p-6 w-full shadow-2xl bg-white border-[#3ec5c7] bg-transparent  rounded">
                        <h2 className="text-2xl font-semibold mb-4 text-[#a555ad] uppercase">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    {...register("password", { required: true })}
                                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-60 mt-5 transform -translate-y-1/2 cursor-pointer"
                                >
                                    {showPassword ? (
                                        <GiSheikahEye className="text-xl text-blue-500"/>
                                    ) : (
                                            <GiTemplarEye className="text-xl text-red-500" />
                                    )}
                                </span>
                                {
                                    error && <p className='text-red-500 text-lg'>User not valid</p>
                                }
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </div>
                            <p className="text-center py-5">DO NOT HAVE AN ACCOUNT? <Link to="/signup" className="underline">SIGN UP</Link> </p>
                            
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-[#a555ad] hover:bg-[#451a49] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                                >
                                    Login
                                </button>
                            </div> 
                        </form>
                        <div className="divider">OR</div>
                        <div className="flex justify-center items-center gap-10 text-3xl py-3">
                            <button className="" onClick={handleGoogleSignIn}>
                                <FcGoogle />
                            </button>
                            <button className="">
                                <BsGithub />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;