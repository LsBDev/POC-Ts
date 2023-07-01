import { Router } from "express"
import { createDog, deleteDog, getDogs } from "../controllers/dog.controller"

const dogRouter = Router()
dogRouter.post("/dog", createDog)
dogRouter.get("/dogs", getDogs)
dogRouter.delete("/dog/:id", deleteDog)
export default dogRouter