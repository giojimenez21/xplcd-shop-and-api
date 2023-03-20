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
        lists: ['id_odoo','base','base_irving','xp3','xp4','xp5','public'] // base xp3 xp4 xp5 publico
    },
    {
        name: 'MOKA',
        lists: ['base','xp3','xp4','xp5','public']
    },
    {
        name: 'MAYORISTA1',
        lists: ['xp3','public'] // xp3 publico
    }, 
    {
        name: 'MAYORISTA2',
        lists: ['xp4','public'] // xp4 publico
    },
    {
        name: 'MAYORISTA3',
        lists: ['xp5','public'] // XP5 Publico
    },
    {
        name: 'XP3',
        lists: ['xp3'] //mayorista
    },
    {
        name: 'XP4',
        lists: ['xp4'] //mayorista
    },
    {
        name: 'XP5',
        lists: ['xp5'] //mayorista
    },
    {
        name: 'VENDEDOR',
        lists: ['public'] //publico
    },
    {
        name: 'IRVING',
        lists: ['base_irving']
    }
];