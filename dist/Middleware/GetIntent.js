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
Object.defineProperty(exports, "__esModule", { value: true });
const Wit_1 = require("../Helpers/Wit");
const GetIntent = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.Body);
    const result = yield Wit_1.WitClient.message(req.body.Body, {});
    console.log(result);
    req.body.intent = (result === null || result === void 0 ? void 0 : result.intents[0]) !== undefined ? result.intents[0].name : ``;
    req.body.target = result.entities['TARGET:TARGET'] ? result.entities['TARGET:TARGET'][0].value : undefined;
    next();
});
exports.default = GetIntent;
//# sourceMappingURL=GetIntent.js.map