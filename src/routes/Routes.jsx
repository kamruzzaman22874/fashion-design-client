import { createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import UserInfo from "../components/UserInfo/UserInfo";
import MyProduct from "../pages/Dashboard/MyProduct/MyProducts";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Instructor from "../components/Instructor/Instructor";
import AddClass from "../components/Instructor/AddClass";
import MyClasses from "../components/Instructor/MyClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";

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
                path: "/signup",
                element: <RegistrationPage/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/classes",
                element: <MyProduct />
            },
            {
                path: "/instructor",
                element: <Instructor/>
            }
        ]
    },
    {
        path: "dashboard",
        element: 
        <PrivateRoutes>
            <Dashboard />
        </PrivateRoutes>,
        
        children: [
            {
                path: "userhome",
                element: <UserHome/>
            },
            {
                path: "myproduct",
                element: <UserInfo/>
            },

            // admin 
            {
                path: "adminHome",
                element: <AdminHome/>
            },

            {
                path: "manageusers",
                element: <PrivateRoutes><AllUsers/></PrivateRoutes>
            },

            // Instructor 
            {
                path: "instructorhome",
                element: <InstructorHome/>
            },
            {
                path: "addclass",
                element: <AddClass/>
            },
            {
                path: "myclasses",
                element: <MyClasses/>
            },
            {
                path: "manageclasses",
                element: <ManageClasses/>
            },
            {
                path: "payment",
                element: <Payment/>
            }
        ]
    },
]);