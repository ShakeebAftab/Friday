"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WitClient = void 0;
const node_wit_1 = require("node-wit");
exports.WitClient = new node_wit_1.Wit({ accessToken: process.env.WIT_ACCESS_TOKEN ? process.env.WIT_ACCESS_TOKEN : '' });
//# sourceMappingURL=Wit.js.map