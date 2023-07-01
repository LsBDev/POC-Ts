import { Dog } from "../protocols/index.protocol"
import { checkDogDB, createDogDB, deleteDogDB, getDogsDB, updateDogDB } from "../repositories/dog.repository"

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

export async function deleteDogService(id: string) {
  const deleted = await deleteDogDB(id)
  
  if(deleted.rowCount === 0) {
    throw {type: "not_found", message: "Dog não encontrado!"}
  } else {
    return deleted
  }
}

export async function updateDogService({updateDog, id}) {
  const {weight, age} =  updateDog
  const updated = await updateDogDB({weight, age, id})

  if(updated.rowCount === 0) {
    throw {type: "not_found", message: "Dog não encontrado!"}
  } else {
    return updated
  }  
}