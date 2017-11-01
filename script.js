
let todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos',this.todos)
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }

};

todoList.displayTodos();
todoList.addTodo('new item');
todoList.changeTodo(0, 'hello');
todoList.toggleCompleted(0)

/*
{
todoText: 'item 1',
completed: false
};

*/
