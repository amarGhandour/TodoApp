import { Component, OnInit } from '@angular/core';
import {ITask} from "../../viewmodels/ITask";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
  }

  addNewTodoItem(task:ITask) {
    this.tasksService.addNewTodo(task);
  }
}
