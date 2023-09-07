(() => {
  type Gender = "M" | "F";
  //Long Version
  //  class Person{
  //     public name: string;
  //     public gender: Gender;
  //     public birthDate: Date;

  //     constructor(name: string, gender: Gender, birthDate: Date){
  //         this.name = name;
  //         this.gender = gender;
  //         this.birthDate = birthDate;
  //     }
  //  }
  //Short Version;

  //Herencia mal estructurada

  interface PersonProperties {
    name: string;
    gender: Gender;
    birthDate: Date;
  }
  interface UserProperties {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthDate: Date;
  }
  interface UserSettings {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastAccess: Date;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProperties) {
      this.name = name;
      this.birthDate = birthDate;
      this.gender = gender;
    }
  }
  const newPerson: Person = new Person({} as PersonProperties);
  console.log(newPerson);

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthDate }: UserProperties) {
      super({ gender, name, birthDate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentails() {
        
    }
  }
  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthDate,
    }: UserSettings) {
      super({ email, role, name, gender, birthDate });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }
  const userSettings = new UserSettings({
    workingDirectory: 'asdasda',
    lastOpenFolder: '123asdasd',
    email:'asd@asd.com',
    birthDate: new Date(),
    gender:"M",
    lastAccess: new Date(),
    name:'Alfredo',
    role:'Director',
})

  console.log(userSettings);
})();
