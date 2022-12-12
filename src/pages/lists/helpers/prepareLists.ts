import { ResponseLists } from "../interface";

export const prepareLists = (lists: ResponseLists[]) => {
    return lists.map((list) => {
        const newProducts = list.products_by_lists.map((product) => {
            const entriesProduct = Object.entries(product);
            const prices = entriesProduct
                .filter((productArray) => productArray[0].includes("xp"))
                .map((productArray) => ({
                    list: productArray[0],
                    price: productArray[1],
                }));
            return {
                name: product.name,
                quality: product.quality,
                prices,
            };
        });
        return {
            ...list,
            products_by_lists: newProducts,
        };
    });
};
