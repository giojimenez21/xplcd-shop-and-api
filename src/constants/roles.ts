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