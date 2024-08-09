import FilterGroup from "@/components/FilterGroup";
import ProductListing from "@/components/ProductListing";
import Section from "@/components/Section";
import { productsList } from "@/utils/productListing";
import { marca, categoria, genero, estado } from "@/utils/filterGroup";

const ProductListingPage = () => {
    return (
        <Section
                className="flex flex-col px-20 pb-56 text-2xl"
                title="Resultados para “Tênis” - 12 produtos"
                titleStyle="w-full text-2xl"
                titleAlign="left"
                isList={true}
            >
                <div className="flex gap-8">
                    <aside className="flex flex-col gap-5 w-[30rem] h-fit bg-white p-8">
                        <h3 className="text-2xl text-darkGray2 font-bold">
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
                            name="radio"
                        />
                    </aside>
                    <ProductListing
                        className="w-full grid grid-cols-3 gap-2"
                        products={productsList}
                    />
                </div>
            </Section>
    );
};

export default ProductListingPage;
