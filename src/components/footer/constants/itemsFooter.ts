import { ItemFooter } from "../interfaces/footer.interface";

export const itemsFooter: ItemFooter[] = [
    {
        title: "Social",
        items: [
            {
                name: "Facebook",
                path: "https://m.facebook.com/102593372306522",
                isExternal: true,
            },
            {
                name: "Instagram",
                path: "https://www.instagram.com/xplcdfactory/",
                isExternal: true,
            },
            {
                name: 'YouTube',
                path: 'https://www.youtube.com/@xplcdfactory',
                isExternal: true,
            }
        ],
    },
    {
        title: "Tienda",
        items: [
            {
                name: "Sucursal",
                path: "sucursales",
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
                path: "quienes-somos",
            },
            {
                name: "Política de privacidad",
                path: "politica-de-privacidad",
            },
            {
                name: "Términos y condiciones",
                path: "terminos-y-condiciones",
            },
        ]
    }
];
