import {Component, OnChanges, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {ITask} from "../../viewmodels/ITask";

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  tasks!:ITask[];
  activeSort:string = 'all';
  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.getAllTasks();
  }

  getALLTasks() {
    if (this.activeSort == 'all')
      return;

    this.activeSort = 'all';
    this.tasks = this.tasksService.getAllTasks();
  }

  getCompletedTasks() {
    if (this.activeSort == 'completed')
      return;

    this.activeSort = 'completed'
    this.tasks = this.tasksService.getCompletedTasks();

  }

  getActiveTasks(){
    if (this.activeSort == 'active')
      return;

    this.activeSort = 'active';
    this.tasks = this.tasksService.getActiveTasks();
  }

  toggleCheck(taskIndex: number) {
    this.tasks[taskIndex].checked = !this.tasks[taskIndex].checked
  }

  clearCompletedTasks() {
    this.tasks = this.tasksService.clearCompletedTasks();
  }

  deleteTask(taskIndex: number) {
    this.tasks.splice(taskIndex, 1);
  }
}
