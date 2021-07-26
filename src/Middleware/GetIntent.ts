import { Request, NextFunction } from "express"
import { WitClient } from "../Helpers/Wit"

const GetIntent = async (req: Request, _: any, next: NextFunction) => {
    console.log(req.body.Body)
    const result = await WitClient.message(req.body.Body, {})
    console.log(result)
    req.body.intent = result?.intents[0] !== undefined ? result.intents[0].name : ``
    req.body.target = result.entities['TARGET:TARGET'] ? result.entities['TARGET:TARGET'][0].value : undefined
    next()
}

export default GetIntent