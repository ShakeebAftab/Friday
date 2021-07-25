"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const johnny_five_1 = require("johnny-five");
const board = new johnny_five_1.Board();
board.on("ready", () => { for (let i = 1; i < 14; i++)
    board.digitalWrite(i, 1); });
exports.default = board;
//# sourceMappingURL=Board.js.map