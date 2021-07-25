"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = __importDefault(require("../../Helpers/Board"));
const Greeting = (req, _, next) => {
    if (req.body.intent === 'GREETING') {
        req.body.res = `Welcome Back, Sir!\nToday's Date: ${new Date().toLocaleDateString()}\nCurrrent Time: ${new Date().toLocaleTimeString()}\nStatus of Hardware functions: ${Board_1.default.isReady ? `Available` : `Unavailable`}`;
    }
    next();
};
exports.default = Greeting;
//# sourceMappingURL=Greeting.js.map