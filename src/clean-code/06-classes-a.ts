
(()=>{
    type Gender = "M"|"F"
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
class Person{
        constructor(
           public name: string, 
           public gender: Gender, 
           public birthDate: Date){
        }
     }
 const newPerson : Person = new Person('Alfredo','M',new Date("1999-01-07"));
 console.log(newPerson);

 class User extends Person{
    constructor(
        public email: string,
        public role: string,
        private lastAccess:Date,
        name: string,
        gender: Gender, 
        birthDate: Date
    ){
        super(name, gender, birthDate);
        this.lastAccess = new Date();
    }
    checkCredentials():Boolean{
       return true;
    }
 }
class UserSettings extends User {
    constructor(
        public workingDirectory : string,
        public lastOpenFolder : string,
        email: string,
        role: string,
        lastAccess:Date,
        name: string,
        gender: Gender, 
        birthDate: Date
    ){
        super(email,role,lastAccess,name,gender,birthDate)
    }

}
const userSettings = new UserSettings('sr/hm/command','home','aps@psa.com','President',new Date(),'Alfredo','M',new Date());

console.log(userSettings);
})();