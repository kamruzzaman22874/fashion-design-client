// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from "../../assets/image/fslider1.webp"
import slider2 from "../../assets/image/fslider2.webp"
import slider3 from "../../assets/image/fslider3.webp"
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Banner = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (

        <div className="my-20">
            <Swiper navigation={true} autoplay={{ delay: 3000 }} loop={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='md:rleative md:-top-72 -top-2'>
                        <img src={slider1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                        <img src={slider2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider3} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Banner;