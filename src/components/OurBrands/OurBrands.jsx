import brand1 from "../../assets/image/brands1.avif"
import brand2 from "../../assets/image/brands2.webp"
import brand3 from "../../assets/image/brands3.webp"
import brand4 from "../../assets/image/brands4.webp"
import brand5 from "../../assets/image/brands5.webp"
import brand6 from "../../assets/image/brands6.webp"
import brand7 from "../../assets/image/brands7.webp"
import Marquee from "react-fast-marquee";
import SectionTitle from "../../pages/sharedPages/SectionTitle/SectionTitle"
const OurBrands = () => {
    return (
        <div className="my-20 px-20 space-y-5">
            <SectionTitle
                title="OUR BRANDS"
                subTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
            ></SectionTitle>
            <Marquee className="flex">
                <img className="border mr-6 p-2" src={brand1} alt="" />
                <img className="border mr-6 p-2" src={brand2} alt="" />
                <img className="border mr-6 p-2" src={brand4} alt="" />
                <img className="border mr-6 p-2" src={brand5} alt="" />
                <img className="border mr-6 p-2" src={brand3} alt="" />
                <img className="border mr-6 p-2" src={brand6} alt="" />
                <img className="border mr-6 p-2" src={brand7} alt="" />
            </Marquee>
        </div>
    );
};

export default OurBrands;