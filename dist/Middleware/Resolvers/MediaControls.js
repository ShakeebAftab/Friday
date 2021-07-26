"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const robotjs_1 = __importDefault(require("robotjs"));
const MediaControls = (req, _, next) => {
    if (req.body.intent.includes('MEDIACONTROLS')) {
        switch (req.body.intent) {
            case 'MEDIACONTROLS_PLAY':
                robotjs_1.default.keyTap('audio_play');
                req.body.res = `Playing Media, Sir!`;
                break;
            case 'MEDIACONTROLS_PAUSE':
                robotjs_1.default.keyTap('audio_pause');
                req.body.res = `Media Paused, Sir!`;
                break;
            case 'MEDIACONTROLS_STOP':
                robotjs_1.default.keyTap('audio_stop');
                req.body.res = `Media Stopped, Sir!`;
                break;
            default:
                req.body.res = `Unexpected error occured, Sir!`;
                break;
        }
    }
    next();
};
exports.default = MediaControls;
//# sourceMappingURL=MediaControls.js.map