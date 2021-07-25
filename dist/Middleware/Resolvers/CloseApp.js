"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const ExitNameResolver_1 = __importDefault(require("../../Helpers/ExitNameResolver"));
const CloseApps = (req, _, next) => {
    if (req.body.intent === 'CLOSEAPPS') {
        const resolvedName = ExitNameResolver_1.default(req.body.target);
        console.log(resolvedName);
        child_process_1.exec(`taskkill /f /im ${resolvedName}`, (err) => {
            if (err)
                throw err;
        });
        req.body.res = `App Closed, Sir!`;
    }
    next();
};
exports.default = CloseApps;
//# sourceMappingURL=CloseApp.js.map