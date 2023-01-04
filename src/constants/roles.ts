/*
    WH 8
    320 24
    100P 18
    GAR 30
*/

interface Rol {
    rolName: string;
    fields: string[];
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
        lists: ['xp31','xp41','xp51','xp61','xp71'] // base xp3 xp4 xp5 publico
    },
    {
        name: 'MOKA',
        lists: ['xp31','xp41','xp51','xp61','xp71']
    },
    {
        name: 'MAYORISTA1',
        lists: ['xp41','xp71'] // xp3 publico
    }, 
    {
        name: 'MAYORISTA2',
        lists: ['xp51','xp71'] // xp4 publico
    },
    {
        name: 'MAYORISTA3',
        lists: ['xp61','xp71'] // XP5 Publico
    },
    {
        name: 'XP3',
        lists: ['xp41'] //mayorista
    },
    {
        name: 'XP4',
        lists: ['xp51'] //mayorista
    },
    {
        name: 'XP5',
        lists: ['xp61'] //mayorista
    },
    {
        name: 'VENDEDOR',
        lists: ['xp71'] //publico
    },
];