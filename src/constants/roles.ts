/*
    WH 8
    320 24
    100P 18
    GAR 30
*/

interface Rol {
    rolName: String;
    fields: String[];
    locations: Number[]
}

export const ROLES:Rol[] = [
    {
        rolName: 'ADMIN',
        fields: ['id', 'name','list_price','qty_available'],
        locations: [8,24,18,30]
    },
    {
        rolName: 'VENDEDOR',
        fields: ['id', 'name','list_price'],
        locations: [24,18]
    },
    {
        rolName: 'BODEGUERO',
        fields: ['id', 'name'],
        locations: [8,30]
    }
]

interface RolList {
    name: string;
    lists: string[];
}


export const rolesLists:RolList[] = [
    {
        name: 'ADMIN',
        lists: ['xp31','xp41','xp51','xp61','xp71']
    },
    {
        name: 'MOKA',
        lists: ['xp31','xp41','xp51','xp61','xp71']
    },
    {
        name: 'MAYORISTA1',
        lists: ['xp41','xp71']
    }, 
    {
        name: 'MAYORISTA2',
        lists: ['xp51','xp71']
    },
    {
        name: 'MAYORISTA3',
        lists: ['xp61','xp71']
    },
    {
        name: 'XP3',
        lists: ['xp41']
    },
    {
        name: 'XP4',
        lists: ['xp51']
    },
    {
        name: 'XP5',
        lists: ['xp61']
    },
    {
        name: 'VENDEDOR',
        lists: ['xp71']
    },
];