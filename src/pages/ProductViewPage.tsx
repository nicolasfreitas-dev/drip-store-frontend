import BuyBox from "@/components/BuyBox";
import Gallery from "@/components/Gallery";
import ProductListing from "@/components/ProductListing";
import ProductOptions from "@/components/ProductOptions";
import Section from "@/components/Section";
import { productInfo } from "@/utils/buyBox";
import { relatedProducts, showAllProducts, viewProduct } from "@/utils/viewProduct";

const ProductViewPage = () => {
    return (
        <div className="w-full flex flex-col px-[10rem] pb-[12.7rem]">
            <div className="flex gap-5 pb-[4rem] pt-[2rem]">
                <span>Home</span>
                <span>/</span>
                <span>Produtos</span>
                <span>/</span>
                <span>Tênis Nike Revolution 6 Next Nature Masculino</span>
            </div>
            <div className="flex gap-[4rem] items-start w-fit">
                <Gallery className="" navigation={true} swiperClass="flex items-center justify-center" width="700px" height="571px" radius="4px" images={viewProduct} />
                <BuyBox className="w-[44rem]" produto={productInfo}>
                    <ProductOptions />
                    <ProductOptions />
                </BuyBox>
            </div>
            <Section title="Produtos Relacionados" titleAlign="left" link={showAllProducts}>
                <ProductListing className="flex flex-wrap justify-between" products={relatedProducts} />
            </Section>
        </div>
    );
};

export default ProductViewPage;
