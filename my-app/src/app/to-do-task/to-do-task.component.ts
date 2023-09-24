import { Component, Input } from '@angular/core';
import {todo} from '../class/todo';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent {
  todoValue: String = '';

  todoItems: todo[] = [
    
  ]

  fTodoItems: todo[] = [
    
  ]

  constructor(){}
  addItem(){
    this.todoItems.push({description: this.todoValue, flag: false});
    this.todoValue = '';
  }
  change(i: number){
    const item = this.todoItems.splice(i,1);
    this.fTodoItems.push(item[0]);
  }
  changeFinish(i: number){
    const item = this.fTodoItems.splice(i,1);
    this.todoItems.push(item[0]);
  }
  deleteItem(i: number){
    this.todoItems.splice(i, 1)
  }
  fDeleteItem(i: number){
    this.fTodoItems.splice(i, 1)
  }
}
