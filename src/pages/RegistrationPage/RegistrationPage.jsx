import Lottie from "lottie-react"
import signup from "../../../public/signup.json"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, userUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                userUpdateProfile(data.name, data.photo)
                    .then(() => {
                        navigate("/")
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    };
    
    return (
        <div className="my-10 px-20">
            <div className="font-roboto h-full px-5">
                <div className="md:flex  justify-center items-center py-10 md:px-16">
                    <div className="rounded-lg bg-transparent p-2 h-full">
                        <Lottie className="md:w-[30rem]  md:-mt-96 rounded" animationData={signup}>

                        </Lottie>
                    </div>
                    <div className="w-full">
                        <div className="max-w-md mx-auto mt-5 p-6 w-full shadow-2xl bg-white border-[#3ec5c7] bg-transparent rounded">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-800 uppercase">Sign Up</h2>
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
                                        {...register("password", { required: true })}
                                        className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                    />
                                    {errors.password && <span className="text-red-500">Password is required</span>}
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
                                        type="url"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        {...register("phoneNumber")}
                                        className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block font-medium">Address</label>
                                    <input
                                        type="url"
                                        id="address"
                                        name="address"
                                        {...register("address")}
                                        className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                    />
                                </div>
                                <p className="text-center py-5">ALREADY HAVE AN ACCOUNT PLEASE?  <Link to="/login" className="underline">LOGIN</Link> </p>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-[#3ec5c7] hover:bg-[#0b4647] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue w-full"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;