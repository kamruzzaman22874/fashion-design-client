import { Outlet } from "react-router-dom";
import Navbar from "../pages/sharedPages/Navbar/Navbar";
import Footer from "../pages/sharedPages/Footer/Footer";

const MainLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayouts;