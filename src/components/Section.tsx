import { SectionProps } from "@/types/types";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Section: React.FC<SectionProps> = ({
    title,
    titleAlign,
    className,
    children,
    link,
}) => {
    const alignmentClass = `text-${titleAlign}`;

    return (
        <section className={className}>
            <div
                className={`w-full flex items-center justify-between py-[3rem] text-[2.4rem] font-bold text-darkGray2 ${alignmentClass}`}
            >
                <p className="w-full">{title}</p>
                {link && link.map((item, index) => (
                        <div className="max-w-max w-full flex items-center gap-2 mr-14 cursor-pointer p-3" key={index}>
                            <Link className="text-[1.8rem] text-primary font-medium" to={item.href}>{item.text}</Link>
                            <ArrowRight className="text-primary" />
                        </div>
                    ))}
            </div>
            <div>{children}</div>
        </section>
    );
};

export default Section;
