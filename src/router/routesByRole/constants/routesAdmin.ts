import { SalesPage, UsersPage, ListPage, EditUserPage} from "../../../pages";

export interface ItemRoute {
    role: string[];
    path: string;
    component: () => JSX.Element;
    isIndex?: boolean;
}

export const routesAdmin: ItemRoute[] = [
    {
        role: ["ADMIN"],
        path: "usuarios",
        component: UsersPage,
        isIndex: true
    },
    {
        role: ["ADMIN"],
        path: "pedidos",
        component: SalesPage
    },
    {
        role: ["ADMIN"],
        path: "editarUsuario/:id",
        component: EditUserPage
    },
    {
        role: ["ADMIN"],
        path: "estadisticas",
        component: UsersPage
    },
    {
        role: ["ADMIN",],
        path: "listas",
        component: ListPage
    },
];
