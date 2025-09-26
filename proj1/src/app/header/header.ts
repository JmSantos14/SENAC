import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `<h1>Minha Lista de Tarefas</h1>`,
  styles: [`
    h1 {
      color: darkorange;
      text-align: center;
      margin-bottom: 20px;
    }
  `]
})
export class Header {}
