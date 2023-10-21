import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({children}) => {
    const {user ,loading} = useContext(AuthContext)
    const [isAdmin , isAdminLoading] = useAdmin()

    if(loading || isAdminLoading){
        <h2>Loding......</h2>
    }

    if(user && isAdmin){
        return children;
    }
    
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;