import { InformationsProps } from "@/types/types";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const Informations: React.FC<InformationsProps> = ({
    title,
    informations,
    className,
}) => {
    return (
        <div>
            <div className="font-bold text-[1.8rem] mb-9">{title}</div>
            <div>
                {informations.map((item, index) => {
                    return (
                        <div className={className} key={index}>
                            <Link to={item.link}>
                                <span className="hover:text-primary">{item.text}</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Informations;
