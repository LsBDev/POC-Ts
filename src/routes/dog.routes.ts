import { Router } from "express"
import { createDog } from "../controllers/create-dog.controller"

const dogRouter = Router()
dogRouter.post("/dog", createDog)

export default dogRouter