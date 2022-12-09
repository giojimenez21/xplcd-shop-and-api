export interface ItemNavbar {
    name: string;
    role: "ADMIN" | "CLIENT";
    path: string;
}

export const itemsNavbar:ItemNavbar[] = [
    {
        name: 'Productos',
        role: 'CLIENT',
        path: 'products'
    },
    {
        name: 'Mis pedidos',
        role: 'CLIENT',
        path: 'pedidos'
    },
    {
        name: 'Carrito',
        role: 'CLIENT',
        path: 'cart'
    },
    {
        name: 'Pedidos de clientes',
        role: 'ADMIN',
        path: 'pedidos'
    },
    {
        name: 'Usuarios',
        role: 'ADMIN',
        path: 'usuarios'
    }
]