export class Actor {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  birthdate: string;

  constructor(
    id: number = 0,
    firstName: string = "",
    lastName: string = "",
    gender: string = "",
    birthdate: string = ""
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthdate = birthdate;
  }
}
