
export {}

declare global {
    namespace Express {
        export interface Request {
            id?: number;
            id_odoo?:number;
        }
    }
}
