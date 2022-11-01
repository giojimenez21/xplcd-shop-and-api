"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderData = void 0;
const orderData = (dataProducts, dataLocations) => {
    const productsFinal = [];
    dataProducts.forEach(product => {
        let locations = [];
        dataLocations.forEach(productByLocation => {
            if (product.id === productByLocation.product_id[0]) {
                locations.push({
                    location_id: productByLocation.location_id[0],
                    location_name: productByLocation.location_id[1],
                    quantity: productByLocation.quantity
                });
            }
        });
        productsFinal.push(Object.assign(Object.assign({}, product), { locations: [...locations] }));
        locations = [];
    });
    return productsFinal;
};
exports.orderData = orderData;
