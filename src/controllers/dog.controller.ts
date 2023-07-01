import { Request, Response } from "express"
import httpStatus from "http-status"
import { createDogService, deleteDogService, getDogsService, updateDogService } from "../services/dog.services"
import { Dog, UpdateDog } from "../protocols/index.protocol"

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

export async function getDogs(req: Request, res: Response) {
  try {
    const {rows} = await getDogsService()
    res.status(httpStatus.OK).send(rows)

  } catch(err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Algo de errado não está certo!")
  }
}

export async function deleteDog(req: Request, res: Response) {
  const id = req.params.id
  try {
    await deleteDogService(id)
    res.status(httpStatus.OK).send("Dog deletado")

  } catch(err) {
    if(err.type === "not_found") return res.status(httpStatus.NOT_FOUND).send(err.message)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Algo de errado não está certo!")
  }
}

export async function updateDog(req: Request, res: Response) {
  const updateDog = req.body as UpdateDog
  const id = req.params.id
  const obj = {updateDog, id}
  try {
    await updateDogService(obj)
    res.status(httpStatus.ACCEPTED).send("Dog atualizado")

  } catch(err) {
    if(err.type === "not_found") return res.status(httpStatus.NOT_FOUND).send(err.message)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Algo de errado não está certo!")
  }
}