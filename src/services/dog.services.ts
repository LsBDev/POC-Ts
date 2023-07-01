import { Dog } from "../protocols/index.protocol"
import { checkDogDB, createDogDB, deleteDogDB, getDogsDB } from "../repositories/dog.repository"

export async function createDogService({name, age, race, weight, tutor_id}: Dog) {  
  const dogExist = await checkDogDB({name, tutor_id})
  if(dogExist.rowCount != 0) {
    throw {type: "conflict", message: "Pet já cadastrado!"}
  } else {
    return await createDogDB({name, age, race, weight, tutor_id})
  } 
}

export function getDogsService() {
  return getDogsDB() 
}

export async function deleteDogService(id) {
  const deleted = await deleteDogDB(id)
  if(deleted.rowCount === 0) {
    throw {type: "not_found", message: "Dog não encontrado!"}
  } else {
    return deleted
  }
}