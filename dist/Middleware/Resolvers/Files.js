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
const twilio_1 = __importDefault(require("twilio"));
const ReadDirs_1 = __importDefault(require("../../Helpers/ReadDirs"));
const client = twilio_1.default(process.env.AccountID, process.env.AuthToken);
const sendMsg = (to, from, body) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.messages.create({
        to,
        from,
        body
    });
});
const throttler = (to, from, files) => {
    let i = 0;
    const interval = setInterval(() => {
        if (i >= files.length - 1)
            clearInterval(interval);
        sendMsg(to, from, files[i++]);
    }, 1000);
};
const Files = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.intent === 'FILES') {
        const files = yield ReadDirs_1.default(req.body.target);
        console.log(req.body.From);
        console.log(files);
        if (files)
            throttler(req.body.From, req.body.To, files);
        req.body.res = files && files.length > 0 ? `Sending file names, Sir!` : `Sorry Sir, Provided directory was empty`;
    }
    next();
});
exports.default = Files;
//# sourceMappingURL=Files.js.map