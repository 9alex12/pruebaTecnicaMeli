export interface Product {
    item:          Item;
    picture:       string;
    condition:     string;
    free_shipping: boolean;
    sold_quantity: number;
    description:   string;
}

export interface Item {
    id:    string;
    title: string;
    price: Price;
}

export interface Price {
    currency: string;
    amount:   number;
}