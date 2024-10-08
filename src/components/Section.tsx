import { SectionProps } from "@/types/types";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Section: React.FC<SectionProps> = ({
    title,
    titleStyle,
    titleAlign,
    className,
    children,
    link,
    isList,
}) => {
    const alignmentClass = `text-${titleAlign}`;

    return (
        <section className={className}>
            <div
                className={`w-full flex items-center justify-between py-12 text-[2.4rem] font-bold text-darkGray2 ${alignmentClass}`}
            >
                <p className={titleStyle}>{title}</p>
                {isList ? (
                    <div className="flex max-w-max w-full items-center gap-3 h-24 p-4 border-[1px] border-darkGray2 rounded-[4px] bg-transparent text-2xl mr-3">
                        <h3>Ordernar por: </h3>
                        <select
                            className="bg-transparent outline-none font-normal"
                            name="order"
                            id="order"
                        >
                            <option value="1">mais relevantes</option>
                            <option value="2">mais caros</option>
                            <option value="3">mais baratos</option>
                        </select>
                    </div>
                ) : (
                    link &&
                    link.map((item, index) => (
                        <div
                            className="max-w-max w-full flex items-center gap-2 mr-14 cursor-pointer p-3"
                            key={index}
                        >
                            <Link
                                className="text-3xl text-primary font-medium"
                                to={item.href}
                            >
                                {item.text}
                            </Link>
                            <ArrowRight className="text-primary" />
                        </div>
                    ))
                )}
            </div>
            <div>{children}</div>
        </section>
    );
};

export default Section;
