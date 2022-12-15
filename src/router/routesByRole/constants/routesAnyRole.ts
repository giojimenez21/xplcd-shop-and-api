import { ItemRoute } from "./routesAdmin";
import { ListPage, Products, DetailProduct, ShopCart } from "../../../pages";

export const routesAnyRole: ItemRoute[] = [
    {
        role: ["ALL"],
        path: "productos",
        component: Products,
    },
    {
        role: ["ALL"],
        path: "productos/:id",
        component: DetailProduct,
    },
    {
        role: ["ALL"],
        path: "carrito-de-compras",
        component: ShopCart,
    },
    {
        role: [
            "MOKA",
            "MAYORISTA1",
            "MAYORISTA2",
            "MAYORISTA3",
            "XP3",
            "XP4",
            "XP5",
            "VENDEDOR",
        ],
        path: "listas",
        component: ListPage,
    },
];
