import Gallery from "@/components/Gallery";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import ProductListing from "@/components/ProductListing";
import SpecialOffer from "@/components/SpecialOffer";
import { homeImages } from "@/utils/homeImages";
import { products, showMoreProducts } from "@/utils/products";
import ornament from "@/public/ornament.png";
import destaqueImg1 from "@/public/collection-1.png";
import destaqueImg2 from "@/public/collection-2.png";
import destaqueImg3 from "@/public/collection-3.png";
import shirt from "@/public/tshirt-_1_.png";
import pants from "@/public/pants.png";
import headphones from "@/public/headphones_1.png";
import shoes from "@/public/Group.png";
import Collection from "@/components/Collection";

const HomePage = () => {
    return (
        <div className="max-w-full max-h-min">
            <div className="w-full h-[68.1rem] flex items-start justify-between absolute px-[10rem] bg-lightGray3">
                <div className="flex flex-col max-w-[51rem] pt-40 relative z-[1]">
                    <span className="text-warning font-bold pb-4">
                        Melhores ofertas personalizadas
                    </span>
                    <h1 className="text-8xl font-bold text-darkGray leading-[6rem] pb-8">
                        Queima de estoque Nike 🔥
                    </h1>
                    <p className="text-[1.8rem] pb-16">
                        Consequat culpa exercitation mollit nisi excepteur do do
                        tempor laboris eiusmod irure consectetur.
                    </p>
                    <Button className="w-[22rem] h-[4.8rem] rounded-[8px] text-2xl text-white font-bold cursor-pointer hover:scale-105 transition-all ease-in duration-200">
                        Ver ofertas
                    </Button>
                </div>
                <div className="size-56 relative top-28 left-24">
                    <img
                        className=""
                        src={ornament}
                        alt="Conjuntos de ornamentos amarelos formando um círculo"
                    />
                </div>
            </div>
            <Gallery
                className="relative z-[0]"
                navigation={false}
                pagination={true}
                showThumbs={false}
                width="100%"
                height="681px"
                imageStyle="relative left-[50rem] bottom-12 object-contain"
                images={homeImages}
            />
            <div className="flex flex-col px-40 pb-48">
                <Section
                    className="w-full items-center"
                    title="Coleções em destaque"
                    titleAlign="left"
                >
                    <div className="flex items-start justify-between w-full h-[37.1rem]">
                        <Collection src={destaqueImg1} alt="Nova coleção Supreme" imagePosition="relative right-[2.1rem] z-0" />
                        <Collection src={destaqueImg2} alt="Coleção Adidas" />
                        <Collection src={destaqueImg3} alt="Novo beat bass" imagePosition="relative left-1 z-0" />
                    </div>
                </Section>
                <Section
                    className="w-full flex flex-col items-center"
                    title="Coleções em destaque"
                    titleAlign="center"
                >
                    <div className="flex w-full gap-[4.8rem] h-[28.1rem]">
                        <div className="flex flex-col items-center gap-5">
                            <div className="size-40 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_25px_rgba(0,0,0,0.05)] cursor-pointer">
                                <img  src={shirt} alt="Camisetas" />
                            </div>
                            <span className="text-2xl font-bold text-darkGray2">Camisetas</span>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <div className="size-40 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_25px_rgba(0,0,0,0.05)] cursor-pointer">
                                <img  src={pants} alt="Calças" />
                            </div>
                            <span className="text-2xl font-bold text-darkGray2">Calças</span>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <div className="size-40 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_25px_rgba(0,0,0,0.05)] cursor-pointer">
                                <img  src={pants} alt="Bonés" />
                            </div>
                            <span className="text-2xl font-bold text-darkGray2">Bonés</span>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <div className="size-40 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_25px_rgba(0,0,0,0.05)] cursor-pointer">
                                <img src={headphones} alt="Headphones" />
                            </div>
                            <span className="text-2xl font-bold text-darkGray2">Headphones</span>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <div className="size-40 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_25px_rgba(0,0,0,0.05)] cursor-pointer">
                                <img  src={shoes} alt="Sapatos" />
                            </div>
                            <span className="text-2xl font-bold text-darkGray2">Sapatos</span>
                        </div>
                    </div>
                </Section>
                <Section
                    title={"Produtos em alta"}
                    titleStyle="w-full text-[2.4rem]"
                    link={showMoreProducts}
                    titleAlign={"left"}
                    className={"w-full"}
                    isList={false}
                >
                    <ProductListing
                        className="w-full grid grid-cols-4 gap-[2.4rem]"
                        products={products}
                    />
                </Section>
            </div>
                <SpecialOffer />
        </div>
    );
};

export default HomePage;
