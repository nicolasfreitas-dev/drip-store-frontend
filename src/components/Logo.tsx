import { LogoProps } from "@/types/types";

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
    return (
        <>
            <img className={className} src={src} alt={alt} />
        </>
    );
};

export default Logo;
