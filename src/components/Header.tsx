import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import logoHeader from "@/assets/logo-header.png";
import { Search, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="max-w-full px-40 bg-white">
            <div className="flex items-center pt-14">
                <Logo
                    className={"w-96 h-16"}
                    src={logoHeader}
                    alt={"Logo digital college colorida"}
                />
                <div className="flex items-center max-w-[55.9rem] w-full h-24 rounded-[8px] bg-lightGray3 px-6 mx-28">
                    <Input
                        className="w-full text-2xl bg-transparent border-0 outline-none"
                        placeholder="Pesquisar produto..."
                        id="search-products"
                    />
                    <Search className="size-10 text-lightGray2 cursor-pointer" />
                </div>
                <span className="text-darkGray2 underline underline-offset-4 text-2xl mr-[6.4rem] cursor-pointer hover:text-primary">
                    Cadastre-se
                </span>
                <Button className="w-40 h-16 text-white font-bold text-2xl rounded-[8px] mr-[9.6rem] hover:scale-105 transition-all ease-in-out duration-200">
                    Entrar
                </Button>
                <ShoppingCart className="size-10 text-primary cursor-pointer" />
            </div>
            <nav className="pt-16 pb-12">
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
                    <Link
                        to="/404notfound"
                        className="aria-[current=page]:font-bold aria-[current=page]:text-primary aria-[current=page]:border-b-[3px] aria-[current=page]:border-primary"
                    >
                        Categorias
                    </Link>
                    <Link
                        to="/404notfound"
                        className="aria-[current=page]:font-bold aria-[current=page]:text-primary aria-[current=page]:border-b-[3px] aria-[current=page]:border-primary"
                    >
                        Meus pedidos
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
