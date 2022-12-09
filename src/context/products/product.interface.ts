export interface ProductCart {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface Sale {
    id:                number;
    total:             number;
    status:            string;
    payment_method:    string;
    id_client:         number;
    products_of_sales: ProductsOfSale[];
    user:              UserSale;
}

export interface ProductsOfSale {
    id:       number;
    name:     string;
    price:    number;
    quantity: number;
    id_sale:  number;
}

export interface UserSale {
    name:  string;
    email: string;
}
