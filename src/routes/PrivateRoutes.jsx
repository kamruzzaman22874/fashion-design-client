import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateRoutes = ({children}) => {
    const {user ,loading} = useContext(AuthContext)
    if(loading){
        <Loader/>
    }
    
    if(user){
        return children;
    }
    
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;