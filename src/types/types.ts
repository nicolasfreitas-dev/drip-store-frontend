import { ReactNode } from "react";

type sliderImages = {
    src: string;
    alt: string;
};

export type GalleryProps = {
    className: string;
    width: string;
    height: string;
    imageStyle?: string;
    images: sliderImages[];
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
    titleAlign: string;
    className?: string;
    children: ReactNode;
    link?: Array<{text: string; href: string;}>;
};

export type Infos = {
    text: string;
    link: string;
};

export type InformationsProps = {
    title: string;
    informations: Infos[];
    className: string;
};

export type LogoProps = {
    src: string;
    alt: string;
    className: string;
};