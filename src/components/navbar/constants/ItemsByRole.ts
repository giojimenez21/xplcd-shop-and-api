export interface ItemNavbar {
    name: string;
    role: string[];
    path: string;
}

export const itemsNavbar: ItemNavbar[] = [
    {
        name: "Productos",
        role: ["CLIENT"],
        path: "products",
    },
    {
        name: "Mis pedidos",
        role: ["CLIENT"],
        path: "pedidos",
    },
    {
        name: "Carrito",
        role: ["CLIENT"],
        path: "cart",
    },
    {
        name: "Pedidos de clientes",
        role: ["ADMIN"],
        path: "pedidos",
    },
    {
        name: "Usuarios",
        role: ["ADMIN"],
        path: "usuarios",
    },
    {
        name: "Listas",
        role: [
            "ADMIN",
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
    },
];
