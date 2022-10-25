import { Result, ResultLocation } from "../interfaces/odoo.interface";

interface Location {
    location_id: string | number;
    location_name: string | number;
    quantity: number;
}

interface ProductFinal extends Result {
    locations: Location[]
}

export const orderData = (dataProducts:Result[], dataLocations:ResultLocation[]):ProductFinal[] => {
    const productsFinal:ProductFinal[] = [];

    dataProducts.forEach(product => {
        let locations:Location[] = []
        dataLocations.forEach(productByLocation => {
            if(product.id === productByLocation.product_id[0]) {
                locations.push({
                    location_id: productByLocation.location_id[0],
                    location_name: productByLocation.location_id[1],
                    quantity: productByLocation.quantity
                });
            }
        });
        
        productsFinal.push({
            ...product,
            locations: [...locations]
        });

        locations = [];
    })
    return productsFinal;
}