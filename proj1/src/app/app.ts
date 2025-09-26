import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Lista } from './lista/lista'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Lista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proj');
}
