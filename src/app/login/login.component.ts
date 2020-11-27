import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public todos: any = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(data => this.todos = data.todos)
  }

}
