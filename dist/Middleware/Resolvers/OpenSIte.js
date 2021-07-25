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
const open_1 = __importDefault(require("open"));
const OpenSite = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.intent === 'OPENSITE') {
        try {
            yield open_1.default(`https://${req.body.target}`);
            req.body.res = `Site Opened, Sir!`;
        }
        catch (err) {
            console.log(err.message);
            req.body.res = `Sir! I wasn't able to open the site.`;
        }
    }
    next();
});
exports.default = OpenSite;
//# sourceMappingURL=OpenSIte.js.map