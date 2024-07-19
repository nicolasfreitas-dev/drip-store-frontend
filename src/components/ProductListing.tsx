import React, { ReactNode } from "react";
import ProductCard from "@/components/ProductCard";
import { ProductListingProps } from "@/types/types";

const ProductListing: React.FC<ProductListingProps> = ({
    products,
    className
}) => {
    return (
        <div className={className}>
            {products.map((item, index) => (
                <div key={index}>
                    <ProductCard
                        image={item.image}
                        alt={item.alt}
                        label={item.label}
                        name={item.name}
                        price={item.price}
                        priceDiscount={item.priceDiscount}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductListing;
