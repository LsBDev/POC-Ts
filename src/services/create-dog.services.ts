import { checkDogDB, createDogDB } from "../repositories/create-dog.repository"

export async function createDogService({name, age, race, weight, tutor_id}) {
  
  const dogExist = await checkDogDB({name, tutor_id})
  if(dogExist.rowCount != 0) {
    throw {type: "conflict", message: "Pet já cadastrado!"}
  } else {
    return await createDogDB({name, age, race, weight, tutor_id})
  } 
}