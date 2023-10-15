import { createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
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
]);