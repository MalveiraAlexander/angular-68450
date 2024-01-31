import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {
  name: string = 'Abel';
  age: number = 10;
  isMarried: boolean = true;
  color: string = 'black';
  hobbies: string[] = ['Correr', 'Leer', 'Dormir'];
  prueba: string | null | undefined = null;
  //Hola mundo
  constructor() {
    setTimeout(() => {
      this.age = 35;
      this.hobbies.push('Comer');
      this.isMarried = false;
      this.color = 'blueviolet';
    }, 5000);
  }


  addHobbie() {
    let hobbies: string[] = ['Escalar', 'Pintar', 'Jardinería', 'Cocinar', 'Fotografía', 'Hacer yoga', 'Tocar un instrumento musical', 'Bucear', 'Hacer senderismo', 'Aprender idiomas'];
    let random = Math.floor(Math.random() * hobbies.length);
    this.hobbies.push(hobbies[random]);
  }
}
