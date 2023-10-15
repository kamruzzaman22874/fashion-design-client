// import SectionTitle from "../../pages/sharedPages/SectionTitle/SectionTitle";
import { RiDoubleQuotesL } from 'react-icons/ri';
import signature from "../../assets/logo/signature.webp"
import shop1 from "../../assets/image/shop1.jpg"
import shop2 from "../../assets/image/shop-2.webp"
import shop3 from "../../assets/image/shop3.webp"
import shop4 from "../../assets/image/shop4.webp"

const OurShop = () => {
    return (
        <div>
            {/* <SectionTitle
            
            ></SectionTitle> */}

            <div className="grid md:grid-cols-3 gap-5">
                <div>
                    <img src={shop1} alt="" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl">Welcome to Our Shop</h2>
                    <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed massa at enim hendrerit scelerisque at ut nulla. Fusce pharetra consectetur lacus sed eleifend. Ut dolor sapien, posuere id turpis non, venenatis ultrices est. Nullam hendrerit at nisl sit amet scelerisque. Vestibulum nec dolor ac quam fringilla rhoncus nec vel dolor.

                    </p>
                        
                    <span className='py-5'>
                            <RiDoubleQuotesL className='text-2xl' />
                        <p className='px-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                        </p>
                    </span>
                    <img src={signature} alt="" />
                </div>
                <div>
                    <img src={shop2} alt="" />
                    <img src={shop3} alt="" />
                    <img src={shop4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurShop;