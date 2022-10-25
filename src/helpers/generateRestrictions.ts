import { ROLES } from "../config";

export const generateRestrictions = (rol:string) => {
    const rolFind = ROLES.find(r => r.rolName === rol);
    if(!rolFind) throw new Error('No se encontro ningun rol.');
    
    const restrictions:any[] = [];
    for (let i = 0; i < rolFind.locations.length - 1; i++) {
        restrictions.push('|');
    }

    rolFind.locations.forEach(location => {
        restrictions.push(['location_id', '=', location]);
    });

    return {
        restrictions,
        fields: rolFind.fields
    }

}