import { createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
]);