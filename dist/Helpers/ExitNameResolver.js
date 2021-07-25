"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppNames_1 = require("../Consts/AppNames");
const ExitNameResolver = (target) => {
    const name = target.toLowerCase().replace(' ', '-');
    return AppNames_1.ExitWinAppNames[`${name}`];
};
exports.default = ExitNameResolver;
//# sourceMappingURL=ExitNameResolver.js.map