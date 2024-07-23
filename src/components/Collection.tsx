import { Button } from "@/components/ui/button";
import { CollectionProps } from "@/types/types";
import React from "react";

const Colletion: React.FC <CollectionProps> = ({ src, alt, imagePosition }) => {
    return (
        <div className="flex w-[40rem] h-[25rem] bg-emphasis rounded-[0.8rem] overflow-hidden">
            <div className="flex flex-col w-[17.2rem] gap-3 h-full pl-[3rem] pt-[3rem] relative z-10">
                <span className="flex items-center w-fit rounded-[29px] font-bold px-[1.7rem] py-[0.8rem] text-[1.6rem] text-darkGray2 bg-discount">
                    30% OFF
                </span>
                <h3 className="text-darkGray text-[2.8rem] font-bold">
                    Novo drop Supreme
                </h3>
                <Button className="w-[15.3rem] h-[4.8rem] rounded-[0.8rem] bg-lightGray3 font-bold text-primary text-[1.6rem] hover:scale-105 transition-all ease-in duration-300">
                    Comprar
                </Button>
            </div>
            <img
                className={imagePosition}
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default Colletion;