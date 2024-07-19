import Gallery from "@/components/Gallery";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import ornament from "../../public/ornament.png";

const homeImages = [
    {
        src: "../../public/white-sneakers.png",
        alt: "Nova coleção de White Sneakers da Nike",
    },
    {
        src: "../../public/white-sneakers.png",
        alt: "Nova coleção de White Sneakers da Nike",
    },
    {
        src: "../../public/white-sneakers.png",
        alt: "Nova coleção de White Sneakers da Nike",
    },
    {
        src: "../../public/white-sneakers.png",
        alt: "Nova coleção de White Sneakers da Nike",
    },
];

const HomePage = () => {
    return (
        <div className="max-w-full max-h-min">
            <div className="w-full h-[68.1rem] flex items-start justify-between absolute px-[10rem]">
                <div className="flex flex-col max-w-[51rem] pt-[10rem] relative z-[1]">
                    <span className="text-warning font-bold pb-[1rem]">
                        Melhores ofertas personalizadas
                    </span>
                    <h1 className="text-[6rem] font-bold text-darkGray leading-[6rem] pb-[2rem]">
                        Queima de estoque Nike 🔥
                    </h1>
                    <p className="text-[1.8rem] pb-[4rem]">
                        Consequat culpa exercitation mollit nisi excepteur do do
                        tempor laboris eiusmod irure consectetur.
                    </p>
                    <Button className="w-[22rem] h-[4.8rem] rounded-[0.8rem] text-[1.6rem] text-white font-bold cursor-pointer hover:scale-105 transition-all ease-in duration-200">
                        Ver ofertas
                    </Button>
                </div>
                <div className="size-[14rem]">
                    <img
                        className=""
                        src={ornament}
                        alt="Conjuntos de ornamentos amarelos formando um círculo"
                    />
                </div>
            </div>
            <Gallery
              className="relative z-[0]"
              width="70rem"
              height="68.1rem"
              imageStyle="relative left-[50rem] bottom-12 object-contain"
              images={homeImages}
            />
            <Section>

            </Section>
        </div>
    );
};

export default HomePage;
