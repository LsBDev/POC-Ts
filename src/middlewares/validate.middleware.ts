import { NextFunction, Request, Response } from "express"

export function validadeSchema(schema) {
  return (req: Request, res: Response, next: NextFunction) => {
      const validation = schema.validate(req.body, {abortEarly: false})
      
      if(validation.error) {
          // const errors = validation.error.details.map(detail => detail.message)
          throw {type: "bad_request", message: "Todos os campos são obrigatórios!"}
      }
      next()
  }
}