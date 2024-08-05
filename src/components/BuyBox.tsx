import { Button } from "@/components/ui/button";
import { BuyBoxProps } from "@/types/types";
import React from "react";
import { Star } from "lucide-react";

const BuyBox: React.FC<BuyBoxProps> = ({ produto, children, className }) => {
    return (
        <div className={className}>
            {produto.map((item, index) => (
                <div className="flex flex-col gap-5" key={index}>
                    <h3 className="text-5xl font-bold text-darkGray">
                        {item.name}
                    </h3>
                    <>
                        {item.reference.map((refer, index) => (
                            <div
                                className="flex gap-3 font-light text-xl text-darkGray3"
                                key={index}
                            >
                                <span>{refer.estilo}</span>
                                <span>|</span>
                                <span>{refer.marca}</span>
                                <span>|</span>
                                <span>{refer.ref}</span>
                            </div>
                        ))}
                    </>
                    <div className="w-full flex items-center justify-start gap-5">
                        <div className="flex size-6 mr-28 gap-1">
                            <img src={item.stars.src} alt="icone de estrela" />
                            <img src={item.stars.src} alt="icone de estrela" />
                            <img src={item.stars.src} alt="icone de estrela" />
                            <img src={item.stars.src} alt="icone de estrela" />
                            <img src={item.stars.src} alt="icone de estrela" />
                        </div>
                        <span className="w-24 flex items-center justify-evenly rounded-md bg-warning text-center text-white font-bold">
                            {item.rating}
                            <Star className="size-5 fill-white" />
                        </span>
                        <span className="text-lightGray">({item.totalRating} avaliações)</span>
                    </div>
                    <div className="flex text- gap-2">
                        <h3 className="text-5xl text-darkGray2 font-bold">
                            <span className="font-normal text-2xl">R$</span> {item.price}
                        </h3>
                        <h4 className="text-2xl text-lightGray2 line-through">
                            {item.priceDiscount}
                        </h4>
                    </div>
                    <div className="text-justify mb-12">
                        <h4 className="text-lightGray font-bold py-2">Descrição do produto</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
            {children}
            <Button className="w-[22rem] h-[4.8rem] bg-warning text-white font-bold text-[1.6rem] rounded-[0.8rem]">
                Comprar
            </Button>
        </div>
    );
};

export default BuyBox;
