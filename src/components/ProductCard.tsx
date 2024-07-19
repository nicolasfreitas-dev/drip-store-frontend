import { ProductCardProps } from "@/types/types";
import React from "react";

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    alt,
    label,
    name,
    price,
    priceDiscount,
}) => {
    return (
        <div className="w-[29.2rem] h-[43.9rem">
            <div className="w-full h-[32.1rem] rounded-[0.4rem] bg-white shadow-[6px_16px_30px_rgba(0,0,0,0.05)] cursor-pointer">
                <img src={image} alt={alt} />
            </div>
            <div className="pt-[1.8rem] "><span className="text-[1.2rem] cursor-pointer text-lightGray font-bold">{label}</span></div>
            <div className="text-[2.4rem]">
                <p className=" text-darkGray2 cursor-pointer">{name}</p>
                <div className="flex gap-4">
                    <span className="text-lightGray line-through">${price}</span>
                    <strong className="text-darkGray">${priceDiscount}</strong>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
