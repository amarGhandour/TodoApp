import { Injectable } from '@angular/core';
import tasks from '/src/assets/tasks.json';
import {ITask} from "../viewmodels/ITask";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks:ITask[] = tasks;
  constructor() { }

  getAllTasks(){
    return this.tasks;
  }

  getCompletedTasks(){
    return this.tasks.filter((task) => task.checked)
  }

  getActiveTasks(){
    return this.tasks.filter((task) => !task.checked)
  }

  clearCompletedTasks(){
    return this.tasks = this.tasks.filter((task) => !task.checked)
  }

  addNewTodo(todo:ITask): void{
    this.tasks.push(todo);
  }
}
