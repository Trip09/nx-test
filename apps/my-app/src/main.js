"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var cars_1 = require("@nx-playground/cars");
// import { DUMMY } from '@nx-playground/cars/dummy';
var express_1 = require("express");
var host = (_a = process.env.HOST) !== null && _a !== void 0 ? _a : 'localhost';
var port = process.env.PORT ? Number(process.env.PORT) : 3000;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send({ message: 'Hello API' });
});
app.listen(port, host, function () {
    console.log("[ ready ] http://".concat(host, ":").concat(port));
});
var a = cars_1.DUMMY;
