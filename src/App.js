import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    todoListTitle: "My Todo List",
    todos: ["walk to Brewlab", "get coffee"],
    newTodo: ""
  };


  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = event => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo]
    });
    this.setState({
      newTodo : ""
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.todoListTitle}</h1>
        {this.state.todos.map(todo => (
          <ToDoListItem todo={todo} key={todo} />
        ))}
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> + </button>
      </div>
    );
  }
}

export default App;