/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    if (todo.length) {
      this.todos.push(todo);
    } else {
      this.todos;
    }
  }

  getAll() {
    return this.todos;
  }

  get(idx) {
    if (idx >= 0 && idx < this.todos.length) {
      return this.todos[idx];
    } else {
      return null;
    }
  }

  update(idx, todo) {
    if (idx >= 0 && idx < this.todos.length) {
      if (todo.length) {
        this.todos[idx] = todo;
      } else {
        this.todos.splice(idx, 1);
      }
    } else {
      return this.todos;
    }
  }

  remove(idx) {
    if (idx >= 0) {
      return this.todos.splice(idx, 1);
    } else {
      return this.todos;
    }
  }

  clear() {
    return (this.todos = []);
  }
}

const myTasks = new Todo("Write Code");
console.log(myTasks.getAll());

myTasks.add("WriteCode ");
myTasks.add("Run TestCases");
myTasks.add("Enjoy");
console.log(myTasks.get(1));

myTasks.update(1, "Check Test Cases");
console.log(myTasks.getAll());

myTasks.remove(1);
console.log(myTasks.getAll());

myTasks.clear();
console.log(myTasks.getAll());

module.exports = Todo;
