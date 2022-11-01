"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByName = exports.getAllProducts = void 0;
const config_1 = require("../config");
const helpers_1 = require("../helpers");
const odoo_1 = require("../helpers/odoo");
const getAllProducts = (req, res) => {
    res.send('Hola');
};
exports.getAllProducts = getAllProducts;
const getProductByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { product, rol } = req.params;
    try {
        const numberAuth = yield (0, odoo_1.loginOdoo)();
        if (!numberAuth)
            return res.status(401).json({ msg: 'Credenciales incorrectas.' });
        const { fields, restrictions } = (0, helpers_1.generateRestrictions)(rol.toUpperCase());
        const bodyPetition = {
            jsonrpc: "2.0",
            method: "call",
            params: {
                service: "object",
                method: "execute",
                args: [
                    process.env.DB,
                    numberAuth,
                    process.env.PASSWORD,
                    "product.template",
                    "search_read",
                    [
                        "&",
                        ["name", "ilike", product],
                        "|",
                        "|",
                        ["name", "ilike", "DISP"],
                        ["name", "ilike", "LCD"],
                        ["name", "ilike", "TOUCH"],
                    ],
                    fields,
                ],
            },
        };
        const bodyPetition2 = {
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
                        "&",
                        ["product_id", "ilike", product],
                        "|",
                        "|",
                        ["product_id", "ilike", "DISP"],
                        ["product_id", "ilike", "LCD"],
                        ["product_id", "ilike", "TOUCH"],
                        ...restrictions
                    ],
                    ["product_id", "location_id", "quantity", "display_name"],
                ],
            },
        };
        const promises = [
            config_1.odooClient.get("/", { data: bodyPetition }),
            config_1.odooClient.get("/", { data: bodyPetition2 }),
        ];
        const [resClient, resLocations] = yield Promise.all(promises);
        const productsFinal = (0, helpers_1.orderData)(resClient.data.result, resLocations.data.result);
        return res.status(200).json({
            status: true,
            phones: productsFinal
        });
    }
    catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
});
exports.getProductByName = getProductByName;
