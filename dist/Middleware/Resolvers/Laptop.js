"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const Laptop = (req, _, next) => {
    if (req.body.intent.includes('LAPTOP')) {
        switch (req.body.target) {
            case 'lock':
                child_process_1.exec('Rundll32.exe user32.dll,LockWorkStation', (err) => { if (err)
                    throw err; });
                req.body.res = `Laptop Secured, Sir!`;
                break;
            case 'hibernate':
                child_process_1.exec('shutdown /h', (err) => { if (err)
                    throw err; });
                req.body.res = `Goodbye! Sir.`;
                break;
            default:
                req.body.res = `Security alert, Unable to perform the required action.`;
                break;
        }
    }
    next();
};
exports.default = Laptop;
//# sourceMappingURL=Laptop.js.map