import { Request, Response } from "express"
import httpStatus from "http-status"
import { createDogService } from "../services/create-dog.services"
import { Dog } from "../protocols/index.protocol"

export async function createDog(req: Request, res: Response) {
  const {name, age, race, weight, id} = req.body as Dog
  try {
    const result = await createDogService({name, age, race, weight, id})
    res.status(httpStatus.CREATED).send("success!")

  } catch(err) {
    
    if(err.type === "incomplete_data") res.send(err.message)

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Algo de errado não está certo!")
  }
}