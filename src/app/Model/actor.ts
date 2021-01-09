export class Actor {
  id: number;
  firstName: string;
  lastname: string;
  gender: string;
  birthdate: string;

  constructor(
    id: number = 0,
    firstName: string = "",
    lastname: string = "",
    gender: string = "",
    birthdate: string = ""
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastname = lastname;
    this.gender = gender;
    this.birthdate = birthdate;
  }
}
