import configDev from "./dev";
import configProd from "./prod";

export interface configDBSequelize {
    user: string;
    password: string;
    db: string;
    host: string;
}

let configDB:configDBSequelize;

if (process.env.NODE_ENV !== "production") {
    configDB = configDev;
} else {
    configDB = configProd;
}

export default configDB;

