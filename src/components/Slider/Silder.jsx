import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderPicture from '../SliderPicture/SliderPicture';
import SliderPictures from '../SliderPicture/SliderPictures';


const Silder = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <SliderPicture></SliderPicture>
            </SwiperSlide>
            <SwiperSlide>
                <SliderPictures></SliderPictures>
            </SwiperSlide>
            <SwiperSlide>
                <SliderPicture></SliderPicture>
            </SwiperSlide>
        </Swiper>
    );
};

export default Silder;