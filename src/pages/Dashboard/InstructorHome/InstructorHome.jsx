import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const InstructorHome =() =>{
    const {user} = useContext(AuthContext)
    return(
        <div className="w-full">
            <h2 className="text-3xl text-pink-600 my-10">Hi Welcome Back {user.displayName}</h2>
        </div>
    )
}

export default InstructorHome;