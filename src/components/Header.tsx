import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import logoHeader from "@/assets/logo-header.svg";
import { Search, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="max-w-full px-[10rem]">
            <div className="flex items-center pt-[3.6rem]">
                <Logo
                    className={"w-96 h-16"}
                    src={logoHeader}
                    alt={"Logo digital college colorida"}
                />
                <div className="flex items-center max-w-[55.9rem] w-full h-[6rem] rounded-[0.8rem] bg-lightGray3 px-[1.6rem] mx-[8rem]">
                    <Input
                        className="w-full text-[1.6rem] bg-transparent border-0 outline-none"
                        placeholder="Pesquisar produto..."
                        id="search-products"
                    />
                    <Search className="size-[2.4rem] text-lightGray2" />
                </div>
                <span className="w-fit text-darkGray2 underline underline-offset-4 text-[1.6rem] mr-[6.4rem] cursor-pointer">
                    Cadastre-se
                </span>
                <Button className="w-[10rem] h-[4rem] text-white font-bold text-[1.6rem] rounded-[0.8rem] mr-[9.6rem] hover:scale-105 transition-all ease-in-out duration-200">
                    Entrar
                </Button>
                <ShoppingCart className="size-[2.4rem] text-primary cursor-pointer" />
            </div>
            <nav className="pt-[4rem] pb-[3.2rem]">
                <ul className="w-full flex gap-8 text-darkGray2">
                    <NavLink
                        to="/"
                        className="aria-[current=page]:font-bold aria-[current=page]:text-primary aria-[current=page]:border-b-[3px] aria-[current=page]:border-primary"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/produtos"
                        className="aria-[current=page]:font-bold aria-[current=page]:text-primary aria-[current=page]:border-b-[3px] aria-[current=page]:border-primary"
                    >
                        Produtos
                    </NavLink>
                    <NavLink
                        to="/categorias"
                        className="aria-[current=page]:font-bold aria-[current=page]:text-primary aria-[current=page]:border-b-[3px] aria-[current=page]:border-primary"
                    >
                        Categorias
                    </NavLink>
                    <NavLink
                        to="/meuspedidos"
                        className="aria-[current=page]:font-bold aria-[current=page]:text-primary aria-[current=page]:border-b-[3px] aria-[current=page]:border-primary"
                    >
                        Meus pedidos
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
