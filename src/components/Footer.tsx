import Logo from "@/components/Logo";
import logoFooter from "@/assets/logo-footer.svg";
import facebookIcon from "@/assets/facebook.svg";
import instagramIcon from "@/assets/instagram.svg";
import twitterIcon from "@/assets/twitter.svg";
import Informations from "@/components/Informations";
import { Link } from "react-router-dom";

const infos = [
    {
        text: "Sobre Drip Store",
        link: "/sobre",
    },
    {
        text: "Segurança",
        link: "/seguranca",
    },
    {
        text: "Wishlist",
        link: "/wishlist",
    },
    {
        text: "Blog",
        link: "/blog",
    },
    {
        text: "",
        link: "/Meus pedidos",
    },
];

const categorias = [
    {
        text: "Camisetas",
        link: "/camisetas",
    },
    {
        text: "Calças",
        link: "/calcas",
    },
    {
        text: "Bonés",
        link: "/bones",
    },
    {
        text: "Headphones",
        link: "/headphones",
    },
    {
        text: "Tênis",
        link: "/tenis",
    },
];

const contato = [
    {
        text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
        link: "/maps",
    },
    {
        text: "(85) 3051-3411",
        link: "/whatsapp",
    },
];

const Footer = () => {
    return (
        <footer className="max-w-full flex flex-col px-[10rem] pt-16 bg-darkGray text-white">
            <div className="flex justify-between">
                <div className="max-w-[30rem] w-full">
                    <Logo
                        className={"w-[25.3rem] h-[4.4rem]"}
                        src={logoFooter}
                        alt={"Logo branca digital college"}
                    />
                    <p className="text-justify py-[4rem]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Iste ullam consectetur modi asperiores
                        consequuntur vitae et eligendi rerum?
                    </p>
                    <div className="flex gap-9">
                        <Link
                            to="https://www.facebook.com/?locale=pt_BR"
                            target="_blank"
                        >
                            <img src={facebookIcon} alt="Logo facebook" />
                        </Link>
                        <Link
                            to="https://www.instagram.com/accounts/login/"
                            target="_blank"
                        >
                            <img src={instagramIcon} alt="Logo instagram" />
                        </Link>
                        <Link
                            to="https://twitter.com/login?lang=pt"
                            target="_blank"
                        >
                            <img src={twitterIcon} alt="Logo twitter" />
                        </Link>
                    </div>
                </div>
                <div className="w-3/6 flex justify-between">
                    <Informations
                        className={"max-w-max mb-[1.5rem]"}
                        title={"Informação"}
                        informations={infos}
                    />
                    <Informations
                        className={"max-w-max mb-[1.5rem]"}
                        title={"Categorias"}
                        informations={categorias}
                    />
                    <Informations
                        className={"max-w-[23rem] mb-[1.5rem]"}
                        title={"Contato"}
                        informations={contato}
                    />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center pt-[3.4rem] text-center">
                <hr />
                <p className="py-[2.2rem]">
                    Todos os direitos reservados 2024 &copy; Nicolas Freitas
                </p>
            </div>
        </footer>
    );
};

export default Footer;
