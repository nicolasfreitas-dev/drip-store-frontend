import { LogoProps } from "@/types/types";
import React, { ReactNode } from "react";

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
    return (
        <>
            <img className={className} src={src} alt={alt} />
        </>
    );
};

export default Logo;
