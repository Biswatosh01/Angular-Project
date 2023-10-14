 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItems: any[] = [
    {
      name: 'Swimming',
      completed: false,
      subtasks: ['Put on swimsuit', 'Go to the pool', 'Swim for 30 minutes']
    },
    {
      name: 'Breakfast',
      completed: false,
      subtasks: ['Prepare cereal', 'Eat breakfast','clean up']
    },
    {
      name: 'College',
      completed: false,
      subtasks: ['Attend lectures', 'Study for exams']
    },
    {
      name: 'Shopping',
      completed: false,
      subtasks: ['Make a shopping list', 'Go to the grocery store']
    },
    {
      name: 'Dinner',
      completed: false,
      subtasks: ['Cook dinner', 'Eat dinner']
    }
  ];
  todoText: string = ''; // Declare the todoText property
  completedItems: any[] = [];

  // Move completed tasks to the completedItems array
  updateCompletedItems() {
    this.completedItems = this.todoItems.filter(item => item.completed);
  }
  newSubtasks: string[] = [];
  deleteTodo(index: number) {
    this.todoItems.splice(index, 1);
    // Optionally, update the completed items list
    this.updateCompletedItems();
  }
  addTodo() {
    if (this.todoText.trim() !== '') {
      const newTodoItem = {
        name: this.todoText,
        completed: false,
        subtasks: this.newSubtasks // Assign the new subtasks array
      };

      this.todoItems.push(newTodoItem);
      this.todoText = '';
      this.newSubtasks = []; // Clear the newSubtasks array

      // Optionally, update the completed items list
      this.updateCompletedItems();
    }
  }

  // ...existing methods...

  // Function to add a new subtask to the newSubtasks array
  addSubtask() {
    if (this.todoText.trim() !== '') {
      this.newSubtasks.push(this.todoText);
      this.todoText = ''; // Clear the input field
    }
  }
}
