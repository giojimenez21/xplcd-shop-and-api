"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProducts = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.routerProducts = (0, express_1.Router)();
exports.routerProducts.get('/', controllers_1.getAllProducts);
exports.routerProducts.get('/:rol/:product', controllers_1.getProductByName);
