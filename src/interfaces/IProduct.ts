import { ICard } from "./ICard";

export interface IProduct extends ICard {
    available: boolean;
    articleNumber: number | string;
    purpose?: string;
    productType?: string;
    boxSize?: number;
    quantityInBox?: number;
    description?: string;
}