export interface ItemNavbar {
    name: string;
    role: string[];
    path: string;
}

export const itemsNavbar: ItemNavbar[] = [
    {
        name: "Productos",
        role: [
            "CLIENT",
            "MOKA",
            "MAYORISTA1",
            "MAYORISTA2",
            "MAYORISTA3",
            "XP3",
            "XP4",
            "XP5",
            "VENDEDOR"],
        path: "productos",
    },
    {
        name: "Mis pedidos",
        role: [
            "CLIENT",
            "MOKA",
            "MAYORISTA1",
            "MAYORISTA2",
            "MAYORISTA3",
            "XP3",
            "XP4",
            "XP5",
            "VENDEDOR"],
        path: "pedidos",
    },
    {
        name: "Carrito",
        role: [
            "CLIENT",
            "MOKA",
            "MAYORISTA1",
            "MAYORISTA2",
            "MAYORISTA3",
            "XP3",
            "XP4",
            "XP5",
            "VENDEDOR"],
        path: "carrito-de-compras",
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
        name: "Estadisticas",
        role: ["ADMIN"],
        path: "estadisticas",
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
