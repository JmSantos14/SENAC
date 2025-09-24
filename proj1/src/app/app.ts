import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proj1');
  titulo:string = "Ja sei como usar";
  imagem:string = "https://cdn.pixabay.com/photo/2020/02/10/18/22/eagle-4837272_1280.jpg"

  pessoa = {
    nome: "João",
    idade: 21
  }
}
