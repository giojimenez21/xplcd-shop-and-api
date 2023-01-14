import { useContext } from "react";

import { AuthContext } from "../../../context";
import { ResponseLists } from "../interface";

export const prepareLists = (lists: ResponseLists[]) => {
    const { userState: { user } } = useContext(AuthContext);

    return lists.map((list) => {
        const products = list.products_by_lists.map((product) => {
            const entriesProduct = Object.entries(product);
            const prices = entriesProduct
                .filter(
                    (productArray) =>
                        productArray[0].includes("xp") ||
                        productArray[0].includes("public") ||
                        productArray[0].includes("base")
                )
                .map((productArray) => {
                    if (user.role === "ADMIN" || user.role === "MOKA") {
                        return {
                            list: productArray[0],
                            price: productArray[1],
                        };
                    }

                    if ( user.role !== "ADMIN" ) {
                        return {
                            list: "mayorista",
                            price: productArray[1],
                        };
                    }

                    return {
                        list: "publico",
                        price: productArray[1]
                    }
                });
            return {
                name: product.name,
                quality: product.quality,
                prices,
            };
        });

        return {
            ...list,
            products_by_lists: products,
        };
    });
};
