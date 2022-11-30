import { ProductCart } from "../../../../context/products/product.interface";

export const calculateTotal = (products: ProductCart[]) => {
    const subtotal = products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    const totalQuantity = products.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

    return {
        subtotal,
        totalQuantity
    }
}