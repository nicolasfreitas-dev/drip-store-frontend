import React from "react";
import ProductCard from "@/components/ProductCard";
import { ProductListingProps } from "@/types/types";
import { NavLink } from "react-router-dom";

const ProductListing: React.FC<ProductListingProps> = ({
    products,
    className
}) => {
    return (
        <div className={className}>
            {products.map((item, index) => (
                <div key={index}>
                    <NavLink to="/produto/:id">
                        <ProductCard
                            image={item.image}
                            alt={item.alt}
                            label={item.label}
                            name={item.name}
                            price={item.price}
                            priceDiscount={item.priceDiscount}
                        />
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default ProductListing;
