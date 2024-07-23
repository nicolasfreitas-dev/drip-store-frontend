import FilterGroup from "@/components/FilterGroup";
import ProductListing from "@/components/ProductListing";
import Section from "@/components/Section";
import { productsList } from "@/utils/productListing";
import { marca, categoria, genero, estado } from "@/utils/filterGroup";

const ProductListingPage = () => {
    return (
        <Section
                className="flex flex-col px-[5rem] pb-[14rem] text-[1.6rem]"
                title="Resultados para “Tênis” - 12 produtos"
                titleStyle="w-full text-[1.6rem]"
                titleAlign="left"
                isList={true}
            >
                <div className="flex gap-[2rem]">
                    <aside className="flex flex-col gap-5 w-[30rem] h-fit bg-white p-[2rem]">
                        <h3 className="text-[1.6rem] text-darkGray2 font-bold">
                            Filtrar por
                        </h3>
                        <hr className="text-lightGray2 " />
                        <FilterGroup
                            title="Marca"
                            inputType="checkbox"
                            options={marca}
                        />
                        <FilterGroup
                            title="Categoria"
                            inputType="checkbox"
                            options={categoria}
                        />
                        <FilterGroup
                            title="Gênero"
                            inputType="checkbox"
                            options={genero}
                        />
                        <FilterGroup
                            title="Estado"
                            inputType="radio"
                            options={estado}
                        />
                    </aside>
                    <ProductListing
                        className="w-full grid grid-cols-4 gap-2"
                        products={productsList}
                    />
                </div>
            </Section>
    );
};

export default ProductListingPage;
