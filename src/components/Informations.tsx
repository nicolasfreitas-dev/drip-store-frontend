import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type Infos = {
    text: string;
    link: string;
};

type InformationsProps = {
    title: string;
    informations: Infos[];
    className: string;
};

const Informations: React.FC<InformationsProps> = ({
    title,
    informations,
    className,
}): ReactNode => {
    return (
        <div>
            <div className="font-bold text-[1.8rem] mb-9">{title}</div>
            <div>
                {informations.map((item, index) => {
                    return (
                        <div className={className} key={index}>
                            <Link to={item.link}>
                                <span>{item.text}</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Informations;
