
let todoList = {
  todos: [],
  displayTodos: function() {
     if( this.todos.length === 0) {
        console.log('Your todo list is empty!');
      } else {
        for (var i = 0; i < this.todos.length; i++) {
          if (this.todos[i].completed === true) {
            console.log('(x)',this.todos[i].todoText);
          } else {
            console.log('( )',this.todos[i].todoText);
          }
      }
    }
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

todoList.addTodo('new item');
todoList.addTodo('new item2');
todoList.displayTodos();
todoList.toggleCompleted(0);


/*
{
todoText: 'item 1',
completed: false
};

*/
