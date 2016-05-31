toDoApp.controller('ToDoController', function() {
  this.todos = [{task: 'ToDo1', completed: true}, { task: "ToDo2", completed: false }];
  this.addToDo() = function() {
    this.todos.push({ text: "Hello World!", completed: false })
  }
});
