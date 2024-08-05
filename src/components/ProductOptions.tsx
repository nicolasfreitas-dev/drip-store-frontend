import React from "react";
import { ProductOptionsProps } from "@/types/types";

const ProductOptions: React.FC <ProductOptionsProps> = ({options, radius, shape, type}) => {
    return (
        <div>
            <span>{options}</span>
        </div>
    );
};

export default ProductOptions;
