import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Pagination,
    Autoplay,
    Thumbs,
    Navigation,
    FreeMode,
} from "swiper/modules";
import { register } from "swiper/element";
import { GalleryProps } from "@/types/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

register();

const Gallery: React.FC<GalleryProps> = ({
    className,
    width,
    height,
    radius,
    showThumbs,
    navigation,
    pagination,
    imageStyle,
    swiperClass,
    images,
}) => {
    return (
        <div className="flex flex-col gap-5">
            <Swiper
                slidesPerView={1}
                navigation={navigation}
                pagination={pagination}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1500}
                modules={[Navigation, Pagination, Autoplay, Thumbs, FreeMode]}
                className={`${className} ${radius}`}
                style={{ width: width, height: height }}
            >
                {images.map((item, index) => (
                    <SwiperSlide className={`${swiperClass}`} key={index}>
                        <img
                            className={imageStyle}
                            src={item.src}
                            alt={item.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {showThumbs && (
                <Swiper
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="w-[700px]"
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={`w-[11rem] h-[9.6rem] flex items-center justify-center bg-[#FFC0BC] ${radius}`}>
                                <img
                                    className="w-32 h-16 object-contain"
                                    src={item.src}
                                    alt={item.alt}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default Gallery;
