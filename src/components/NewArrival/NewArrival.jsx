import SectionTitle from "../../pages/sharedPages/SectionTitle/SectionTitle";
import product1 from "../../assets/image/product1.webp"
import product2 from "../../assets/image/product2.webp"
import product3 from "../../assets/image/product3.webp"
import product4 from "../../assets/image/product4.webp"
import product5 from "../../assets/image/product5.webp"
import product6 from "../../assets/image/product6.webp"
import product7 from "../../assets/image/product7.webp"
import product8 from "../../assets/image/product8.webp"
import Rating from "react-rating";
import { BsStar, BsStarFill} from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import "./NewArrival.css"

const NewArrival = () => {
    return (
        <div>
            <SectionTitle
                title="NEW ARRIVALS"
            ></SectionTitle>
            <div className="grid md:grid-cols-4 my-10 px-20 card-bg">
                <div className="bg-base-100 border group hover:shadow-xl">
                    <figure className="px-10 pt-10 group-hover:hidden">
                        <img src={product1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <figure className="px-10 pt-10 hidden group-hover:block card_title transition-all duration-200 group-hover:rotate group-hover:transation-all">
                        <img src={product2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Button Type Purse</h2>
                        <p>
                            <Rating
                                className="text-yellow-600"
                                readonly
                                placeholderRating={3.5}
                                emptySymbol={<BsStar />}
                                placeholderSymbol={<BsStarFill />}
                                fullSymbol={<AiFillStar />}
                            />
                        </p>
                        <h2 className="text-xl">$790</h2>
                        <div className="">
                            <button className="bg-[#a555ad] px-6 py-2 text-white rounded hover:bg-[#73097c]">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 border group hover:shadow-xl">
                    <figure className="px-10 pt-10 group-hover:hidden">
                        <img src={product3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <figure className="px-10 pt-10 hidden group-hover:block group-hover:rotate group-hover:transation-all duration-75">
                        <img src={product4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Stylish Wallet</h2>
                        <p>
                            <Rating
                                className="text-yellow-600"
                                readonly
                                placeholderRating={3.5}
                                emptySymbol={<BsStar />}
                                placeholderSymbol={<BsStarFill />}
                                fullSymbol={<AiFillStar />}
                            />
                        </p>
                        <h2 className="text-xl">$320</h2>
                        <div className="">
                            <button className="bg-[#a555ad] px-6 py-2 text-white rounded hover:bg-[#73097c]">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 border group hover:shadow-xl">
                    <figure className="px-10 pt-10 group-hover:hidden">
                        <img src={product5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <figure className="px-10 pt-10 hidden group-hover:block group-hover:rotate group-hover:transation-all duration-75">
                        <img src={product6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Roomy bag</h2>
                        <p>
                            <Rating
                                className="text-yellow-600"
                                readonly
                                placeholderRating={3.5}
                                emptySymbol={<BsStar />}
                                placeholderSymbol={<BsStarFill />}
                                fullSymbol={<AiFillStar />}
                            />
                        </p>
                        <h2 className="text-xl">$550</h2>
                        <div className="">
                            <button className="bg-[#a555ad] px-6 py-2 text-white rounded hover:bg-[#73097c]">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 border group hover:shadow-xl">
                    <figure className="px-10 pt-10 group-hover:hidden">
                        <img src={product7} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <figure className="px-10 pt-10 hidden group-hover:block group-hover:rotate group-hover:transation-all duration-75">
                        <img src={product8} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Party wear heel</h2>
                        <p>
                            <Rating
                                className="text-yellow-600"
                                readonly
                                placeholderRating={3.5}
                                emptySymbol={<BsStar/>}
                                placeholderSymbol={<BsStarFill/>}
                                fullSymbol={<AiFillStar />}
                            />
                        </p>
                        <h2 className="text-xl">$810</h2>
                        <div className="">
                            <button className="bg-[#a555ad] px-6 py-2 text-white rounded hover:bg-[#73097c]">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;