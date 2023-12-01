import Lottie from "lottie-react"
import signup from "../../../public/signup.json"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../sharedPages/SocialLogin/SocialLogin";

const RegistrationPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, userUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                userUpdateProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = {
                            name: data.name,
                            email: data.email,
                            image: data.photoURL,
                            gender: data.gender,
                            phoneNumber: data.phoneNumber,
                            address: data.address
                        };
                        fetch("https://fashion-design-server-seven.vercel.app/users", {
                            method: 'POST',
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {

                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                }
                            })
                        navigate("/")
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="my-10 px-20">
            <Helmet>
                <title>Fashion | Signup</title>
            </Helmet>
            <div className="font-roboto h-full px-5">
                <div className="md:flex  justify-center items-center py-10 md:px-16">
                    <div className="rounded-lg bg-transparent p-2 h-full">
                        <Lottie className="md:w-[30rem]  md:-mt-96 rounded" animationData={signup}>

                        </Lottie>
                    </div>
                    <div className="w-full">
                        <div className="max-w-md mx-auto mt-5 p-6 w-full shadow-2xl bg-[#111827] border-[#3ec5c7] bg-transparent rounded">
                            <h2 className="text-2xl font-semibold mb-4 text-[#a555ad] uppercase">Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block  font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        {...register("name", { required: true })}
                                        className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                    />
                                    {errors.name && <span className="text-red-500">Name is required</span>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block font-medium">Email</label>
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
                                    <label htmlFor="password" className="block font-medium">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        {...register("password", { required: true, minLength: 6 })}
                                        className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                    />
                                    {errors.password && <span className="text-red-500">Password Must be six characters</span>}
                                    {/* {errors.password && <span className="text-red-500">Password is required</span>} */}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="photoURL" className="block font-medium">Photo URL</label>
                                    <input
                                        type="url"
                                        id="photoURL"
                                        name="photoURL"
                                        {...register("photoURL")}
                                        className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="photoURL" className="block font-medium">Gender</label>
                                    <select {...register("gender")} className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400">
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phoneNumber" className="block font-medium">Phone Number</label>
                                    <input
                                        type="number"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        {...register("phoneNumber")}
                                        className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block font-medium">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        {...register("address")}
                                        className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                    />
                                </div>
                                <p className="text-center text-white py-5">ALREADY HAVE AN ACCOUNT PLEASE?  <Link to="/login" className="underline">LOGIN</Link> </p>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-[#3ec5c7] hover:bg-[#0b4647] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue w-full"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div className="divider text-white">OR</div>
                                <SocialLogin />

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;