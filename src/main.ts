import './style.css';
import './solid-principles/03-liskov-a'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`
export interface IPerson{
   id: string;
   fullName: string;
   fullLastName: string;
}
export class Person implements IPerson {
  id: string;
  fullName: string;
  fullLastName: string;

  constructor (id: string = '', fullName: string = '', fullLastName: string = ''){
    this.id = id,
    this.fullLastName = fullLastName,
    this.fullName = fullName
  }
}
