import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule], // permite *ngIf, *ngFor, [(ngModel)]
  templateUrl: './lista.html',
  styleUrls: ['./lista.css']
})
export class Lista {
  // Array de tarefas
  tarefas: string[] = [];

  // Nova tarefa (para o input)
  novaTarefa: string = '';

  // Adicionar tarefa
  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push(this.novaTarefa);
      this.novaTarefa = '';
    }
  }



  // Remover tarefa
  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
