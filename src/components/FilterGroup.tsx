import { FilterGroupProps } from "@/types/types";
import React from "react";

const FilterGroup: React.FC<FilterGroupProps> = ({
    title,
    inputType,
    options,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <h4 className="text-[1.4rem] text-darkGray2 font-bold">{title}</h4>
            {options.map((item, index) => (
                <div className="flex gap-2" key={index}>
                    <input className="size-[2rem] accent-primary ring-0" type={inputType} value={item.values} />
                    <label htmlFor="">{item.text}</label>
                </div>
            ))}
        </div>
    );
};

export default FilterGroup;
