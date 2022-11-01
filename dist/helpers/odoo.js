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
exports.loginOdoo = void 0;
const config_1 = require("../config");
const loginOdoo = () => __awaiter(void 0, void 0, void 0, function* () {
    const body = {
        jsonrpc: "2.0",
        method: "call",
        params: {
            service: "common",
            method: "login",
            args: [
                process.env.DB,
                process.env.USERNAME,
                process.env.PASSWORD
            ]
        }
    };
    const res = yield config_1.odooClient.get('/', { data: body });
    return res.data.result;
});
exports.loginOdoo = loginOdoo;
