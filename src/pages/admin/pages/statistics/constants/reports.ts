interface Report {
    name: string;
    path: string;
}

export const reports:Report[] = [
    {
        name: "Stock",
        path: "stock-diario"
    },
    {
        name: "Ventas por producto",
        path: "ventas-por-producto"
    },
    {
        name: "10 productos más vendidos",
        path: "productos-mas-vendidos"
    }
];