export interface Products {
    items: Item[];
}

export interface Item {
    id:            string;
    title:         string;
    price:         Price;
    picture:       string;
    condition:     string;
    free_shipping: boolean;
    city: string;
}

export interface Price {
    currency: string;
    amount:   number;
}
