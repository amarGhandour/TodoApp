import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-todo-form',
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.css']
})
export class NewTodoFormComponent implements OnInit {

  task:any;
  @Output() newTodoAdded:EventEmitter<any>;
  constructor() {
    this.newTodoAdded = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }


  submitForm( taskElement:HTMLInputElement, $event: SubmitEvent) {

    $event.preventDefault();
    this.task = {"title": taskElement.value, "checked": false}
    taskElement.value = "";
    this.newTodoAdded.emit(this.task);
  }
}
