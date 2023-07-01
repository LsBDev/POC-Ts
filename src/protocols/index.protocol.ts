//----CACHORROS-----
export type Dog = {
  name: string, 
  age: number,
  race: string,
  weight: number,
  tutor_id: number
}

export type UpdateDog = Omit<Dog, "name" | "race" | "tutor_id">

//----TUTORES-----
export type Tutor = {
  name: string, 
  email: string,
  phone: string
}