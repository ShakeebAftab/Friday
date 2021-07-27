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
const OpenSite_1 = __importDefault(require("../Middleware/Resolvers/OpenSite"));
const OpenApp_1 = __importDefault(require("../Middleware/Resolvers/OpenApp"));
const CloseApp_1 = __importDefault(require("../Middleware/Resolvers/CloseApp"));
const Volume_1 = __importDefault(require("../Middleware/Resolvers/Volume"));
const Chrome_1 = __importDefault(require("../Middleware/Resolvers/Chrome"));
const MediaControls_1 = __importDefault(require("../Middleware/Resolvers/MediaControls"));
const Files_1 = __importDefault(require("../Middleware/Resolvers/Files"));
const Laptop_1 = __importDefault(require("../Middleware/Resolvers/Laptop"));
router.post('/', [
    GetIntent_1.default,
    Greeting_1.default,
    OpenSite_1.default,
    OpenApp_1.default,
    CloseApp_1.default,
    Volume_1.default,
    Chrome_1.default,
    MediaControls_1.default,
    Files_1.default,
    Laptop_1.default,
    Lights_1.default
], (req, res) => {
    const twiml = new twilio_1.default.twiml.MessagingResponse();
    twiml.message(req.body.res !== `` ? req.body.res : `Sorry Sir, I was not able to process your request`);
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});
exports.default = router;
//# sourceMappingURL=Msg.js.map