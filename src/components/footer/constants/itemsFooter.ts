import { ItemFooter } from "../interfaces/footer.interface";

export const itemsFooter: ItemFooter[] = [
    {
        title: "Social",
        items: [
            {
                name: "Facebook",
                path: "https://www.youtube.com/watch?v=1DhA69K3fZ4",
                isExternal: true,
            },
            {
                name: "Instagram",
                path: "www.instagram.com",
                isExternal: true,
            },
            {
                name: 'YouTube',
                path: 'www.youtube.com',
                isExternal: true,
            }
        ],
    },
    {
        title: "Tienda",
        items: [
            {
                name: "Sucursal",
                path: "",
            },
            {
                name: "¿Cómo llegar?",
                path: "",
                isExternal: true
            }
        ]
    },
    {
        title: "Sobre nosotros",
        items: [
            {
                name: "¿Quienes somos?",
                path: "",
            },
            {
                name: "Política de privacidad",
                path: "",
            },
            {
                name: "Términos y condiciones",
                path: "",
            },
        ]
    }
];
