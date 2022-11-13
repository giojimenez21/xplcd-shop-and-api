export interface ItemNavbar {
    name: string;
    role: "ADMIN" | "CLIENT"
}

export const itemsNavbar:ItemNavbar[] = [
    {
        name: 'Mis pedidos',
        role: 'CLIENT'
    },
    {
        name: 'Carrito',
        role: 'CLIENT'
    },
    {
        name: 'Pedidos de clientes',
        role: 'ADMIN'
    }
]