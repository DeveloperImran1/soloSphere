// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

// import image 
import bgImage1 from ".././assets/images/carousel1.jpg"
import bgImage2 from ".././assets/images/carousel2.jpg"
import bgImage3 from ".././assets/images/carousel3.jpg"

export default function Carosel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image={bgImage1} text="Get the Graphics design" ></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bgImage2} text="Get the Graphics design" ></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bgImage3} text="Get the Graphics design" ></Slide>
        </SwiperSlide>

    
      </Swiper>
    </>
  );
}
