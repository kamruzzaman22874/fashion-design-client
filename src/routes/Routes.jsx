import { createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import MyProduct from "../pages/Dashboard/MyProduct/MyProduct";

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
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "myproduct",
                element: <MyProduct/>
            }
        ]
    },
]);