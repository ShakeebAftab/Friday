"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Speaker_1 = __importDefault(require("../../Helpers/Speaker"));
const Media = (req, _, next) => {
    if (req.body.intent.includes('VOLUME')) {
        switch (req.body.intent) {
            case 'VOLUME_SET':
                Speaker_1.default.set(parseInt(req.body.target));
                req.body.res = `Volume level changed to: ${Speaker_1.default.get()}`;
                break;
            case 'VOLUME_UP':
                Speaker_1.default.increase(parseInt(req.body.target) > 0 ? parseInt(req.body.target) : 2);
                req.body.res = `Volume level changed to: ${Speaker_1.default.get()}`;
                break;
            case 'VOLUME_DOWN':
                Speaker_1.default.decrease(parseInt(req.body.target) > 0 ? parseInt(req.body.target) : 2);
                req.body.res = `Volume level changed to: ${Speaker_1.default.get()}`;
                break;
            default:
                req.body.res = `Sorry Sir, I was not able to change the volume`;
                break;
        }
    }
    next();
};
exports.default = Media;
//# sourceMappingURL=Media.js.map