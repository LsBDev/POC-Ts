import { Request, Response } from "express"
import httpStatus from "http-status"
import { createDogService } from "../services/create-dog.services"
import { Dog } from "../protocols/index.protocol"

export async function createDog(req: Request, res: Response) {
  const dog = req.body as Dog
  try {
    await createDogService(dog)
    res.status(201).send("success!")

  }catch(err) {
    // if(err.type === "incomplete_data") res.send(err.message)
    if(err.type === "conflict") return res.status(httpStatus.CONFLICT).send(err.message)

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Algo de errado não está certo!")
  }
}