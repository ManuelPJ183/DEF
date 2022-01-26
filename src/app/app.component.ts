import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  todo = '';
  
  tareas: any[] = []

  addTodo() {
  
  if(this.todo != ''){
  this.tareas = [...this.tareas, this.todo]//crea un nuevo array con lo
  }
  this.todo = '';
  }

  completed(todosp: number){
    this.tareas.splice(todosp, 1)
  }
}