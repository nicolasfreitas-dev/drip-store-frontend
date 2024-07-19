import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { register } from "swiper/element";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type sliderImages = {
    src: string;
    alt: string;
};

type GalleryProps = {
    className: string;
    width: string;
    height: string;
    imageStyle?: string;
    images: sliderImages[];
    radius?: string;
    showThumbs?: boolean;
};

register();

const Gallery: React.FC<GalleryProps> = ({
    className,
    width,
    height,
    radius,
    showThumbs,
    imageStyle,
    images,
}): ReactNode => {
    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay
            modules={[Pagination]}
            className={className}
        >
            {images.map((item, index) => (
                <SwiperSlide style={{ width: width, height: height }} key={index}>
                    <img className={imageStyle} src={item.src} alt={item.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Gallery;
