import moment from "moment";
import cron from "node-cron";

import { loginOdoo } from "./odoo";
import { odooClient } from "../clients";
import { StockByDate } from "../models";
import { ResWarehouse } from "../interfaces/odoo.interface";
import { Op } from "sequelize";

export const getStockInitial = cron.schedule(
    "00 10 * * *",
    async () => {
        try {
            const numberAuth = await loginOdoo();
            if (!numberAuth) return;

            const body = {
                jsonrpc: "2.0",
                method: "call",
                params: {
                    service: "object",
                    method: "execute",
                    args: [
                        process.env.DB,
                        numberAuth,
                        process.env.PASSWORD,
                        "stock.quant",
                        "search_read",
                        [
                            "|",
                            "|",
                            "|",
                            "&",
                            "|",
                            "|",
                            ["product_id", "ilike", "DISP"],
                            ["product_id", "ilike", "LCD"],
                            ["product_id", "ilike", "TOUCH"],
                            ["location_id", "=", 8],
                            ["location_id", "=", 18],
                            ["location_id", "=", 24],
                            ["location_id", "=", 30],
                        ],
                        ["product_id", "location_id", "quantity"],
                    ],
                },
            };

            const response = await odooClient.get<ResWarehouse>("/", {
                data: body,
            });

            let initial100P = 0,
                initial320P = 0,
                initialWh = 0,
                initialGar = 0;

            response.data.result.forEach((product) => {
                if (product.location_id[1].toString().includes("100 P")) {
                    initial100P += product.quantity;
                    return;
                }

                if (product.location_id[1].toString().includes("320")) {
                    initial320P += product.quantity;
                    return;
                }

                if (product.location_id[1].toString().includes("WH")) {
                    initialWh += product.quantity;
                    return;
                }

                if (product.location_id[1].toString().includes("GAR")) {
                    initialGar += product.quantity;
                    return;
                }
            });

            await StockByDate.create({
                initial100P,
                final100P: initial100P,
                initial320P,
                final320P: initial320P,
                initialWh,
                finalWh: initialWh,
                initialGar,
                finalGar: initialGar,
            });
        } catch (error: any) {
            console.log(error.message);
        }
    },
    {
        scheduled: false,
        timezone: "America/Mexico_City",
    }
);

export const getStockFinal = cron.schedule(
    "00 17 * * *",
    async () => {
        try {
            const numberAuth = await loginOdoo();
            const dateNow = moment().format("YYYY-MM-DD").toString();

            if (!numberAuth) return;

            const body = {
                jsonrpc: "2.0",
                method: "call",
                params: {
                    service: "object",
                    method: "execute",
                    args: [
                        process.env.DB,
                        numberAuth,
                        process.env.PASSWORD,
                        "stock.quant",
                        "search_read",
                        [
                            "|",
                            "|",
                            "|",
                            "&",
                            "|",
                            "|",
                            ["product_id", "ilike", "DISP"],
                            ["product_id", "ilike", "LCD"],
                            ["product_id", "ilike", "TOUCH"],
                            ["location_id", "=", 8],
                            ["location_id", "=", 18],
                            ["location_id", "=", 24],
                            ["location_id", "=", 30],
                        ],
                        ["product_id", "location_id", "quantity"],
                    ],
                },
            };

            const response = await odooClient.get<ResWarehouse>("/", {
                data: body,
            });

            let final100P = 0,
                final320P = 0,
                finalWh = 0,
                finalGar = 0;

            response.data.result.forEach((product) => {
                if (product.location_id[1].toString().includes("100 P")) {
                    final100P += product.quantity;
                    return;
                }

                if (product.location_id[1].toString().includes("320")) {
                    final320P += product.quantity;
                    return;
                }

                if (product.location_id[1].toString().includes("WH")) {
                    finalWh += product.quantity;
                    return;
                }

                if (product.location_id[1].toString().includes("GAR")) {
                    finalGar += product.quantity;
                    return;
                }
            });

            const stock = await StockByDate.update(
                {
                    final100P,
                    final320P,
                    finalWh,
                    finalGar,
                },
                {
                    where: {
                        createdAt: {
                            [Op.substring]: dateNow,
                        },
                    },
                }
            );

        } catch (error: any) {
            console.log(error.message);
        }
    },
    {
        scheduled: false,
        timezone: "America/Mexico_City",
    }
);
