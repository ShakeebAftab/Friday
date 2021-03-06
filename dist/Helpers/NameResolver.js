"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppNames_1 = require("../Consts/AppNames");
const NameResolver = (target) => {
    const name = target.toLowerCase().replace(' ', '-');
    return AppNames_1.WinAppNames[`${name}`];
};
exports.default = NameResolver;
//# sourceMappingURL=NameResolver.js.map