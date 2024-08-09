import { Button } from "@/components/ui/button";
import blackSneakers from "@/public/black-white-sneakers.png";

const SpecialOffer = () => {
    return (
        <div className="w-full h-[55.3rem] flex items-center justify-evenly bg-white">
            <div className="relative size-[45.6rem] rounded-full bg-gradient-to-b from-secondary/40 to-white "></div>
            <img
                className="absolute left-44 top-100 object-cover"
                src={blackSneakers}
                alt="Air Jordan edição de colecionador"
            />
            <div className="flex flex-col w-[58.9rem] h-[34.1rem]">
                <h4 className="text-2xl text-primary font-bold">
                    Oferta especial
                </h4>
                <h2 className="text-[4.8rem] text-darkGray2 font-bold pt-7 leading-[5rem]">
                    Air Jordan edição de colecionador
                </h2>
                <p className="text-darkGray2 text-justify text-[1.6rem] pb-[3rem] pt-[2rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                </p>
                <Button className="bg-primary text-2xl text-white font-bold w-80 h-16 rounded-[8px] hover:scale-105 transition-all ease-in duration-200">
                    Ver oferta
                </Button>
            </div>
        </div>
    );
};

export default SpecialOffer;
