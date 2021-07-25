import { NextFunction, Request, Response } from "express";
import board from "../../Helpers/Board";

const Greeting = (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent === 'GREETING') {
        req.body.res = `Welcome Back, Sir!\nToday's Date: ${new Date().toLocaleDateString()}\nCurrrent Time: ${new Date().toLocaleTimeString()}\nStatus of Hardware functions: ${board.isReady ? `Available` : `Unavailable`}`
    }
    next()
}

export default Greeting