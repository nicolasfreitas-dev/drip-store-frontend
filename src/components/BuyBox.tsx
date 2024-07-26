import { Button } from "@/components/ui/button";
import { BuyBoxProps } from "@/types/types";
import React from "react";

const BuyBox: React.FC<BuyBoxProps> = ({ produto, children, className }) => {
    return (
        <div className={className}>
            {produto.map((item, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <>
                        {item.reference.map((refer, index) => (
                            <div key={index}>
                                <span>{refer.estilo}</span>
                                <span>{refer.marca}</span>
                                <span>{refer.ref}</span>
                            </div>
                        ))}
                    </>
                    <div>
                        <div></div>
                        <span></span>
                        <span>({item.rating} avaliações)</span>
                    </div>
                    <div>
                        <h4>Descrição do produto</h4>
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
