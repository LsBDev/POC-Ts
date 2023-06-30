import express, { Request, Response, json } from "express"
import httpStatus from "http-status"
import dotenv from "dotenv"
import router from "./routes/index.routes"

dotenv.config()
const app = express()
app.use(json())
app.use(router)

router.get("/health", (req: Request, res: Response) => {
  res.status(httpStatus.OK).send("Aplicação Rodando!")
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
