import { ReactNode } from "react";

export type GalleryProps = {
    className: string;
    width: string;
    height: string;
    imageStyle?: string;
    images: Array<{ src: string; alt: string; }>;
    radius?: string;
    showThumbs?: boolean;
};

export type ProductCardProps = {
    image: string;
    alt: string;
    label: string;
    name: string;
    price: number;
    priceDiscount: number;
}

export type Products = {
    image: string;
    label: string;
    alt: string;
    name: string;
    price: number;
    priceDiscount: number;
}

export type ProductListingProps = {
    className: string;
    products: Products[];
}

export type SectionProps = {
    title: string;
    titleStyle?: string;
    titleAlign: string;
    className?: string;
    children: ReactNode;
    isList?: boolean;
    link?: Array<{ text: string; href: string; }>;
};

export type InformationsProps = {
    title: string;
    informations: Array<{ text: string; link: string }>;
    className: string;
};

export type LogoProps = {
    src: string;
    alt: string;
    className: string;
};

export type CollectionProps = {
    src: string;
    alt: string;
    imagePosition?: string;
};

export type FilterGroupProps = {
    title: string;
    inputType: string;
    options: Array<{ text: string; values?: string; }>;
};