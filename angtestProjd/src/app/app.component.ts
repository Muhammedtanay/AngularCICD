import { Component } from '@angular/core';
import { Model, TodoListItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = 'USER';
  model = new Model;
  items = this.model.items;
  isDisplay = false;
  name!: string;

  getName() {
    return this.model.user;
  }
  getItems() {
    if (this.isDisplay) {
      return this.model.items.filter((item: any) => !item.action)
    }
    return this.model.items;
  }
  addItem(value: string) {
    if (value) {
      this.model.items.push(new TodoListItem(value, false));
    }
  }
}
