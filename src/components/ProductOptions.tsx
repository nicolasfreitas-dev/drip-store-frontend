import React from "react";
import { ProductOptionsProps } from "@/types/types";

const ProductOptions: React.FC<ProductOptionsProps> = ({
    options,
    radius,
    shape,
}) => {
    return (
        <div className="flex gap-4">
            {shape === "circle"
                ? options.map((item, index) => (
                      <div
                          className={`size-12 mb-10 ${item} rounded-${radius} cursor-pointer hover:border-2 hover:border-primary`}
                          key={index}
                      >
                      </div>
                  ))
                : options.map((item, index) => (
                      <div
                          className={`flex items-center justify-center size-16 border-[1px] border-lightGray2 ${radius} text-darkGray2 font-bold mb-4 cursor-pointer hover:bg-primary hover:text-white`}
                          key={index}
                      >
                          {item}
                      </div>
                  ))}
        </div>
    );
};

export default ProductOptions;
