import { createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import CommonUsersInfo from "../components/CommonUsersInfo/CommonUsersInfo";
import UserInfo from "../components/UserInfo/UserInfo";
import MyProduct from "../pages/Dashboard/MyProduct/MyProducts";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        element: <MainLayouts/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "signup",
                element: <RegistrationPage/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "/myproduct",
                element: <MyProduct />
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        
        children: [
            {
                path: "/dashboard",
                element: <CommonUsersInfo/>
            },
            {
                path: "myproduct",
                element: <UserInfo/>
            },
            {
                path: "manageusers",
                element: <AllUsers/>
            },
        ]
    },
]);