import notfoundImg from "@/public/robot404.png"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="h-screen flex items-center justify-center gap-12">
            <div>
                <img src={notfoundImg} alt="Error 404 image" />
            </div>
            <div className="flex flex-col items-center gap-12 w-2/5">
                <h1 className="text-5xl text-bg-darkGray text-center font-bold">A página que você está tentando acessar não existe ou não foi encontrada.</h1>
                <button className="w-80 h-20 bg-primary text-white text-2xl font-bold rounded-[8px] hover:scale-105"><Link to="/">Voltar para Home</Link></button>
            </div>
        </section>
    )
}

export default NotFound;