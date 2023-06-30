import { createDogDB } from "../repositories/create-dog.repository"

export function createDogService({name, age, race, weight, id}) {

  if(!name || !age || !weight || !id) throw {type: "incomplete_data", message: "Todos os campos são obrigatórios!"}

  return createDogDB({name, age, race, weight, id})
}