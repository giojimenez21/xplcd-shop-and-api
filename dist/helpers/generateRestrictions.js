"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRestrictions = void 0;
const config_1 = require("../config");
const generateRestrictions = (rol) => {
    const rolFind = config_1.ROLES.find(r => r.rolName === rol);
    if (!rolFind)
        throw new Error('No se encontro ningun rol.');
    const restrictions = [];
    for (let i = 0; i < rolFind.locations.length - 1; i++) {
        restrictions.push('|');
    }
    rolFind.locations.forEach(location => {
        restrictions.push(['location_id', '=', location]);
    });
    return {
        restrictions,
        fields: rolFind.fields
    };
};
exports.generateRestrictions = generateRestrictions;
