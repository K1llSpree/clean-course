(() => {

  // No aplicando el principio de responsabilidad única

  type Gender = 'M'|'F';

  interface PersonProps {
      birthdate : Date;
      gender    : Gender;
      name      : string;
  }

  class Person {
      public birthdate: Date;
      public gender   : Gender;
      public name     : string;

      constructor({ name, gender, birthdate }: PersonProps ){
          this.name      = name;
          this.gender    = gender;
          this.birthdate = birthdate;
      }
  }


  interface UserProps {
      email     : string;
      role      : string;
  }

  class User  {
      
      public email: string;
      public role : string;
      public lastAccess: Date;

      constructor({
          email,
          role,
      }: UserProps ) {
          this.lastAccess = new Date();
          this.email = email;
          this.role  = role;
      }

      checkCredentials() {
          return true;
      }
  }


  interface UserSettingsProps {
      birthdate        : Date;
      email            : string;
      gender           : Gender;
      lastOpenFolder   : string;
      name             : string;
      role             : string;
      workingDirectory : string;
  }
  interface SettingsProps{
    workingDirectory: string;
    lastOpenFolder  : string;
  }
  class Settings{
     workingDirectory: string;
     lastOpenFolder  : string;

     constructor({workingDirectory, lastOpenFolder}: SettingsProps){
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
     }
  }

  class UserSettings{
      public person:Person;
      public settings: Settings;
      public user: User;

      constructor({
          workingDirectory,
          lastOpenFolder,
          email,
          role,
          name,
          gender,
          birthdate,
      }: UserSettingsProps ) {
        this.person = new Person({name,gender,birthdate});
        this.settings= new Settings({workingDirectory,lastOpenFolder});
        this.user= new User({email,role});
      }
  }


  const userSettings = new UserSettings({
      birthdate: new Date('1985-10-21'),
      email: 'fernando@google.com',
      gender: 'M',
      lastOpenFolder: '/home',
      name: 'Fernando',
      role: 'Admin',
      workingDirectory: '/usr/home',
  });

  console.log({ userSettings });


})();