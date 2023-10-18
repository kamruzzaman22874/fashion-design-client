import { useContext, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/"
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                const saveUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email
                };
                console.log(loggedUser);
                fetch("http://localhost:5000/users", {
                    method: 'POST',
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                        
                    })
            })
            .catch(err => {
                setError(err);
                // toast.error('Login failed please try again');

            })
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
        <div>
            <div className="flex justify-center items-center gap-10 text-3xl py-3">
                <button className="" onClick={handleGoogleSignIn}>
                    <FcGoogle />
                </button>
                <button className="">
                    <BsGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;