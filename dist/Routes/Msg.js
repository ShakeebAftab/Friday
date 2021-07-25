"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const twilio_1 = __importDefault(require("twilio"));
const router = express_1.Router();
const GetIntent_1 = __importDefault(require("../Middleware/GetIntent"));
const Greeting_1 = __importDefault(require("../Middleware/Resolvers/Greeting"));
const Lights_1 = __importDefault(require("../Middleware/Resolvers/Lights"));
const OpenSIte_1 = __importDefault(require("../Middleware/Resolvers/OpenSIte"));
const OpenApp_1 = __importDefault(require("../Middleware/Resolvers/OpenApp"));
const CloseApp_1 = __importDefault(require("../Middleware/Resolvers/CloseApp"));
router.post('/', [
    GetIntent_1.default,
    Greeting_1.default,
    OpenSIte_1.default,
    OpenApp_1.default,
    CloseApp_1.default,
    Lights_1.default
], (req, res) => {
    const twiml = new twilio_1.default.twiml.MessagingResponse();
    twiml.message(req.body.res);
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});
exports.default = router;
//# sourceMappingURL=Msg.js.map