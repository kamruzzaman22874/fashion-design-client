import { AiFillStar } from "react-icons/ai";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const PopularClasses = ({ product }) => {
    const { image,image1, classesName, instructorName, instructorEmail, price, availbleSeat,rating } = product;
    return (
        <div className="bg-transparent opacity-100 border group hover:shadow-xl w-full h-[600px] font-lato">
            <figure data-aos="zoom-in" className="md:px-10 md:pt-10 group-hover:hidden">
                <img src={image} alt="product" className="rounded-xl h-[300px] w-full" />
            </figure>
            <figure data-aos="zoom-in" className="md:px-10   md:pt-10 hidden group-hover:block card_title transition-all duration-200 group-hover:rotatet group-hover:transation-all">
                <img src={image1} alt="product" className="rounded-xl bg-transparent" />
            </figure>
            <div className="md:p-10 p-5 space-y-2 w-full text-white">
                <h2 className="">Product Name: {classesName}</h2>
                <h2 className="">Instructor Name: {instructorName}</h2>
                <h2 className="">Instructor Email: {instructorEmail}</h2>
                <div className="flex justify-between items-center">
                    <h2 className="">Available Seat: {availbleSeat}</h2>
                    <p className="">Price: ${price}</p>
                </div>
                <p className="">
                    <Rating
                        className="text-yellow-400"
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<BsStar />}
                        placeholderSymbol={<BsStarFill />}
                        fullSymbol={<AiFillStar />}
                    />
                </p>
                <div className="w-full">
                    <button className="bg-[#a555ad] px-6 py-2 w-full text-white rounded hover:bg-[#73097c]">Add To Cart</button>
                </div>
            </div>
            
        </div>
    );
};

export default PopularClasses;