import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user ,loading} = useContext(AuthContext)
    if(user){
        return children;
    }
    if(loading){
        <h2>Loding......</h2>
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;