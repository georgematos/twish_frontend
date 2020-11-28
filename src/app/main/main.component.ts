import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todos = undefined;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  logout(): void {
    console.log("realizar logout");
    this.router.navigateByUrl('/login');
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(data => this.todos = data.todos);
  }

}
