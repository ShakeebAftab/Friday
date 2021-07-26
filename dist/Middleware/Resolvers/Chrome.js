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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const robotjs_1 = __importDefault(require("robotjs"));
const ActiveWindow_1 = __importDefault(require("../../Helpers/ActiveWindow"));
const Chrome = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.intent.includes(`CHROME`)) {
        const activeWin = yield ActiveWindow_1.default();
        if (activeWin === 'chrome.exe') {
            switch (req.body.intent) {
                case 'CHROME_NEWTAB':
                    robotjs_1.default.keyToggle('control', 'down');
                    robotjs_1.default.keyTap('t');
                    robotjs_1.default.keyToggle('control', 'up');
                    req.body.res = `New tab opened, Sir!`;
                    break;
                case `CHROME_RELOAD`:
                    robotjs_1.default.keyTap('f5');
                    break;
                default:
                    break;
            }
        }
        else {
            req.body.res = `Chrome isn't open sir!`;
        }
    }
    next();
});
exports.default = Chrome;
//# sourceMappingURL=Chrome.js.map