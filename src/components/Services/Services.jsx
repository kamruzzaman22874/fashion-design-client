import SectionTitle from "../../pages/sharedPages/SectionTitle/SectionTitle";
import { BiMobile } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { FaCss3, FaTabletAlt } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';

const Services = () => {
    return (
        <div className="my-20">
            <SectionTitle
                title="OUR SERVICE"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></SectionTitle>

            <div className="grid md:grid-cols-2 py-3 gap-10 p-5 text-white">
                <div className="space-y-10">
                    <div className="flex justify-center items-center md:gap-10">
                        <div className="md:text-end">
                            <h2 className="font-semibold">TOTALLY RESPONSIVE</h2>
                            <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>
                        <div >
                            <BiMobile className="text-7xl bg-transparent bg-[#edeef2] p-5 hover:bg-black hover:text-white" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <div className="text-end">
                            <h2 className="font-semibold">HIGHLY CUSTOMIZABLE</h2>
                            <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>
                        <div>
                            <FiSettings className="text-7xl bg-transparent bg-[#edeef2] p-5 hover:bg-black hover:text-white" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <div className="text-end">
                            <h2 className="font-semibold">GOOGLE FONTS</h2>
                            <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>
                        <div>
                            <FaCss3 className="text-7xl bg-transparent bg-[#edeef2] p-5 hover:bg-black hover:text-white" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <div className="text-end">
                            <h2 className="font-semibold">LOTS OF SHORTCODES</h2>
                            <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>
                        <div>
                            <FaTabletAlt className="text-7xl bg-transparent bg-[#edeef2] p-5 hover:bg-black hover:text-white" />
                        </div>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex justify-center items-center gap-10">
                        <div>
                            <h2 className="text-5xl font-extrabold bg-[#edeef2] p-3 hover:bg-black hover:text-white bg-transparent">H</h2>
                        </div>
                        <div className="">
                            <h2 className="font-semibold">DIFFERENT HEADER TYPES</h2>
                            <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>
                        
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <div>
                            <FiSettings className="text-7xl bg-transparent bg-[#edeef2] p-5 hover:bg-black hover:text-white" />
                        </div>
                        <div className="">
                            <h2 className="font-semibold">DIFFERENT CSS 3 STYLES</h2>
                            <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <div>
                            <h2 className="text-5xl font-extrabold bg-[#edeef2] p-3 bg-transparent hover:bg-black hover:text-white">A</h2>
                        </div>
                        <div className="">
                            <h2 className="font-semibold">RETINA READY</h2>
                            <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <div>
                            <BsCodeSlash className="text-7xl bg-transparent font-extrabold bg-[#edeef2] p-5 hover:bg-black hover:text-white" />
                        </div>
                        <div className="">
                            <h2 className="font-semibold">MULTIPLE DEMOS</h2>
                            <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        </div>  
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;