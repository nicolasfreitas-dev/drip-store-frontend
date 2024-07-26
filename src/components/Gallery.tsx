import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { register } from "swiper/element";
import { GalleryProps } from "@/types/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();

const Gallery: React.FC<GalleryProps> = ({
    className,
    width,
    height,
    radius,
    showThumbs,
    imageStyle,
    swiperClass,
    navigation,
    images,
}) => {
    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={navigation}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
            modules={[Pagination, Autoplay]}
            className={className}
            style={{ width: width, height: height }}
        >
            {images.map((item, index) => (
                <SwiperSlide className={swiperClass} key={index}>
                    <img className={imageStyle} src={item.src} alt={item.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Gallery;
