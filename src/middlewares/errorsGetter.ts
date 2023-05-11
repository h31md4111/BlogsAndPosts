import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

export const errorsGetter = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({
            errorsMessages: errors.array({onlyFirstError: true})
                .map(e => {
                    return {
                        message: e.msg,
                        field: e.type === 'field' ? e.path : null
                    }
                })
        })
    } else {
        next()
    }
}