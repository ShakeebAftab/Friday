import { Router, Request, Response } from 'express'
import twilio from 'twilio'

const router = Router()

// Middleware Imports
import GetIntent from '../Middleware/GetIntent'
import Greeting from '../Middleware/Resolvers/Greeting'
import Lights from '../Middleware/Resolvers/Lights'
import OpenSite from '../Middleware/Resolvers/OpenSIte'

router.post('/', [
    GetIntent,
    Greeting,
    OpenSite,
    Lights
], (req: Request, res: Response) => {
    const twiml = new twilio.twiml.MessagingResponse()
    twiml.message(req.body.res)
    res.writeHead(200, {'Content-Type': 'text/xml'})
    res.end(twiml.toString())
})

export default router