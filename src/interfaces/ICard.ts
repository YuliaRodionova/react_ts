export interface ICard {
    id: number;
    img: any;
    weight: number;
    unit: string;
    brand: string;
    productName: string;
    code: number | string;
    producer?: string;
    price: number;
}