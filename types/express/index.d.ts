declare namespace Express {
    export interface Request {
        id?: number;
        id_odoo?: number | boolean;
        role?: string;
        access_to_lists?: boolean;
    }
}
