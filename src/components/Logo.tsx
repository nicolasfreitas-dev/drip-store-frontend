import React, { ReactNode } from "react";

type LogoProps = {
    src: string;
    alt: string;
    className: string;
};

const Logo: React.FC<LogoProps> = ({ src, alt, className }): ReactNode => {
    return (
        <>
            <img className={className} src={src} alt={alt} />
        </>
    );
};

export default Logo;
