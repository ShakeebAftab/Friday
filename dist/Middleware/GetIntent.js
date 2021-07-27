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
const Wit_1 = require("../Helpers/Wit");
const Redis_1 = __importDefault(require("../Helpers/Redis"));
const GetIntent = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    Redis_1.default.get(`TARGET:${req.body.Body.toLowerCase()}`, (err, data) => {
        if (err)
            console.error(err);
        req.body.target = data;
    });
    Redis_1.default.get(`INTENT:${req.body.Body.toLowerCase()}`, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            console.error(err);
        if (data) {
            req.body.intent = data;
            console.log(req.body.intent);
            next();
        }
        else {
            const result = yield Wit_1.WitClient.message(req.body.Body, {});
            console.log(result);
            req.body.intent = (result === null || result === void 0 ? void 0 : result.intents[0]) !== undefined ? result.intents[0].name : ``;
            req.body.target = result.entities['TARGET:TARGET'] ? result.entities['TARGET:TARGET'][0].value : undefined;
            Redis_1.default.SET(`INTENT:${req.body.Body.toLowerCase()}`, req.body.intent);
            Redis_1.default.SET(`TARGET:${req.body.Body.toLowerCase()}`, req.body.target);
            next();
        }
    }));
});
exports.default = GetIntent;
//# sourceMappingURL=GetIntent.js.map