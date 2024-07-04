export interface Product {
    id: number,
    category: string;
    title: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number,
        count: number
    }
}

export interface TCart extends Product {
    quantity: number;
    totalPrices: number
}