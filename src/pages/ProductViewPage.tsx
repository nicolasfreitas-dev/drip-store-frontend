import BuyBox from "@/components/BuyBox";
import Gallery from "@/components/Gallery";
import ProductListing from "@/components/ProductListing";
import ProductOptions from "@/components/ProductOptions";
import Section from "@/components/Section";
import { productInfo } from "@/utils/buyBox";
import {
    relatedProducts,
    showAllProducts,
    viewProduct,
} from "@/utils/viewProduct";

const ProductViewPage = () => {
    return (
        <div className="w-full flex flex-col px-40 pb-[12.7rem]">
            <div className="flex gap-5 pb-16 pt-8">
                <span>Home</span>
                <span>/</span>
                <span>Produtos</span>
                <span>/</span>
                <span>Tênis Nike Revolution 6 Next Nature Masculino</span>
            </div>
            <div className="flex gap-16 items-start w-fit">
                <Gallery
                    className="bg-secondary"
                    showThumbs={true}
                    navigation={true}
                    pagination={false}
                    swiperClass="flex items-center justify-center"
                    width="700px"
                    height="571px"
                    radius="rounded-[4px]"
                    images={viewProduct}
                />
                <BuyBox className="w-[44rem]" produto={productInfo}>
                    <h4 className="text-lightGray font-bold py-2">
                        Tamanho do produto
                    </h4>
                    <ProductOptions
                        options={["36", "37", "38", "39", "40", "41", "42"]}
                        radius="rounded-[4px]"
                        shape="square"
                    />
                    <h4 className="text-lightGray font-bold py-2">
                        Cor do produto
                    </h4>
                    <ProductOptions
                        options={["bg-[#6FEEFF]", "bg-[#FF6969]", "bg-[#5E5E5E]", "bg-[#6D70B7]"]}
                        radius="full"
                        shape="circle"
                    />
                </BuyBox>
            </div>
            <Section
                title="Produtos Relacionados"
                titleAlign="left"
                link={showAllProducts}
            >
                <ProductListing
                    className="flex flex-wrap justify-between"
                    products={relatedProducts}
                />
            </Section>
        </div>
    );
};

export default ProductViewPage;
