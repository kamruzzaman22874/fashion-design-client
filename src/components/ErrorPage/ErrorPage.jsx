import Lottie from "lottie-react"
import signup from "../../../public/error.json"
import { Link } from "react-router-dom";
import errorImg from "../../assets/logo/errorPages.png"

const ErrorPage = () => {
    return (
        <div>
            
            <div className="flex justify-center items-center bg-[#1B1921] min-h-screen">
                <Lottie className="md:w-[25rem] absolute top-[10%] rounded" animationData={signup}>
                </Lottie>

                <div>
                    <img className="text-white" src={errorImg} alt="" />
                    <div className="space-y-5">
                        <h2 className=" text-white text-9xl font-extrabold text-center">
                            4O4
                        </h2>
                        <p className="text-center text-white text-2xl  tracking-widest">NOT FOUND</p>
                        <p className="text-center text-white">Sorry, but the page that you requested doesnt exist.</p>
                        <span className="flex justify-center items-center">
                            <Link to="/">
                                <button className="px-16 py-5 text-white rounded boreder border-2 border-white">Continue to Our Home Page</button>
                            </Link>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;


