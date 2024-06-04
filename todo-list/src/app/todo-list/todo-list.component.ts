import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todos: Todo [] = [];

  constructor(private todoService: TodoService ){}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  toggleTodoCompletion(id: number): void{
    this.todoService.toggleTodoCompletion(id);
  }

  delete(id: number): void{
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
