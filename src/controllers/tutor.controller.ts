import {Request, Response} from "express"
import { Tutor } from "../protocols/index.protocol"
import httpStatus from "http-status"
import { createTutorService } from "../services/tutor.services"

export async function createTutor(req: Request, res: Response) {
  const body = req.body as Tutor
  try {
    await createTutorService(body)
    res.status(httpStatus.CREATED).send("Tutor criado")

  }catch(err) {
    if(err.type = "bad_request") return res.status(httpStatus.BAD_REQUEST).send(err.message)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Alguma coisa deu errado!")
  }
}