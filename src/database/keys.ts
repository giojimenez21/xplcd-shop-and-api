import configDev from "./dev";
import configProd from "./prod";

export interface configDB {
    user: string;
    password: string;
    db: string;
    host: string;
    api: string;
}

let configDB:configDB;

if (process.env.NODE_ENV !== "production") {
    configDB = configDev;
} else {
    configDB = configProd;
}

export default configDB;

