"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const NameResolver_1 = __importDefault(require("../../Helpers/NameResolver"));
const OpenApps = (req, _, next) => {
    if (req.body.intent === 'OPENAPPS') {
        const resolvedName = NameResolver_1.default(req.body.target);
        console.log(resolvedName);
        child_process_1.exec(`start ${resolvedName}`, (err) => {
            if (err)
                throw err;
        });
        req.body.res = `App Opened, Sir!`;
    }
    next();
};
exports.default = OpenApps;
//# sourceMappingURL=OpenApp.js.map