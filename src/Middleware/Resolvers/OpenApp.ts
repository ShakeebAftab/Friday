import { NextFunction, Request } from 'express'
import { exec } from 'child_process' 
import NameResolver from '../../Helpers/NameResolver'

const OpenApps = (req: Request, _: Response, next: NextFunction) => {
    if (req.body.intent === 'OPENAPPS') {
        const resolvedName = NameResolver(req.body.target)
        exec(`start ${resolvedName}`, (err) => {
            if (err) throw err
        })
        req.body.res = `App Opened, Sir!`
    }
    next()
}

export default OpenApps