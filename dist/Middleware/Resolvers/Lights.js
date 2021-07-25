"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = __importDefault(require("../../Helpers/Board"));
const Lights = (req, _, next) => {
    if (req.body.intent === 'LIGHTS') {
        if (Board_1.default.isReady) {
            switch (req.body.target) {
                case 'ON':
                    Board_1.default.digitalWrite(4, 0);
                    req.body.res = `Turning on lights, Sir!`;
                    break;
                case 'OFF':
                    Board_1.default.digitalWrite(4, 1);
                    req.body.res = `Turning off lights, Sir!`;
                    break;
                default:
                    break;
            }
        }
    }
    next();
};
exports.default = Lights;
//# sourceMappingURL=Lights.js.map