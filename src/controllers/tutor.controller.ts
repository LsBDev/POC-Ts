import {Request, Response} from "express"
import { Tutor } from "../protocols/index.protocol"
import httpStatus from "http-status"
import { createTutorService, deleteTutorService } from "../services/tutor.services"

export async function createTutor(req: Request, res: Response) {
  const body = req.body as Tutor
  try {
    await createTutorService(body)
    res.status(httpStatus.CREATED).send("Tutor criado")

  }catch(err) {
    if(err.type = "bad_request") return res.status(httpStatus.BAD_REQUEST).send(err.message)
    if(err.type = "error") return res.status(httpStatus.BAD_REQUEST).send(err.message)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Alguma coisa deu errado!")
  }
}

export async function  deleteTutor(req: Request, res: Response) {
  const id = req.params.id

  try {
    await deleteTutorService(id)
    res.status(httpStatus.OK).send("Tutor Deletado")

  }catch(err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
  }  
}