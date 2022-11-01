"use strict";
/*
    WH 8
    320 24
    100P 18
    GAR 30
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = void 0;
exports.ROLES = [
    {
        rolName: 'ADMIN',
        fields: ['id', 'name', 'list_price', 'qty_available'],
        locations: [8, 24, 18, 30]
    },
    {
        rolName: 'VENDEDOR',
        fields: ['id', 'name', 'list_price'],
        locations: [24, 18]
    },
    {
        rolName: 'BODEGUERO',
        fields: ['id', 'name'],
        locations: [8, 30]
    }
];
