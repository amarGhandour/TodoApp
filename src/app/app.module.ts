import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewTodoFormComponent } from './components/new-todo-form/new-todo-form.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NewTodoFormComponent,
    TodoItemsComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
