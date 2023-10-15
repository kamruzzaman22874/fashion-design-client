import Banner from "../Banner/Banner";
import NewArrival from "../NewArrival/NewArrival";
import OurBrands from "../OurBrands/OurBrands";
import OurShop from "../OurShop/OurShop";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurShop/>
            <NewArrival/>
            <Services/>
            <OurBrands/>
        </div>
    );
};

export default Home;