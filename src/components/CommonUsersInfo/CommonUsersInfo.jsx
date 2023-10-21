import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const CommonUsersInfo = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="w-full text-white">
            {
                user && <> 
                {/* <h2 className="uppercase text-2xl text-center">Users dashboard</h2> */}
                <img src={user?.photoURL} className="rounded mb-5" alt="" />
                
                <h2 className="text-3xl"> Welcome to {user?.displayName}</h2>
                
                 </>
            }
        </div>
    );
};

export default CommonUsersInfo;