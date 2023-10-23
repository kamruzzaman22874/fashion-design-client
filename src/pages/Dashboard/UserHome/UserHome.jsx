import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const UserHome =() =>{
    const {user} = useContext(AuthContext)
    return (
        <div className="my-20 w-full">
            <h2 className="text-2xl text-pink-600"> Hi Welcome Back {user?.displayName}</h2>
            {/* <h1>Welcome {user?.displayName}</h1>
            <img src={user?.photoURL} alt="" /> */}
        </div>
    )
}

export default UserHome;