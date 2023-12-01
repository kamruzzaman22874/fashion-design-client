// import SectionTitle from "../../pages/sharedPages/SectionTitle/SectionTitle";
import { RiDoubleQuotesL } from 'react-icons/ri';
import signature from "../../assets/logo/signature.webp"
import shop1 from "../../assets/image/shop1.jpg"
import shop2 from "../../assets/image/shop-2.webp"

const OurShop = () => {
    return (
        <div className='md:px-20 md:my-20 p-5 text-white'>
            <div className="grid md:grid-cols-3 gap-5">
                <div>
                    <img src={shop1} alt="" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl">Welcome to Our Shop</h2>
                    <p>Step into a world where creativity knows no bounds and fashion becomes a canvas for self-expression. At Fashion, we invite you to embark on a journey that transcends trends and embraces the essence of individuality. With a passion for innovation and an unwavering commitment to elegance, we curate a collection that celebrates the diversity of style.

                    </p>

                    <div className='py-5'>
                        <RiDoubleQuotesL className='text-2xl' />
                        <p className='px-6'>
                            More than just clothing, Fashion Design is a celebration of confidence and empowerment. We believe that fashion is a language—one that speaks volumes about your personality and aspirations. Our mission is to empower you to embrace your individuality fearlessly, to experiment, to express, and to set your trends.
                        </p>
                    </div>
                    <img className='' src={signature} alt="" />
                </div>
                <div>
                    <img src={shop2} alt="" />
                    {/* <img src={shop3} alt="" />
                    <img src={shop4} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default OurShop;