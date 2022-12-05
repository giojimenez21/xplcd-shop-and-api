
export {}

declare global {
    namespace Express {
        export interface Request {
            id?: number;
            id_odoo?:number;
            role?: string;
            access_to_lists?: boolean;
        }
    }
}
