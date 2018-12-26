import React, { Component } from "react";

class ToDoListItem extends React.Component {
    state = {
      todos: null
    };


    componentWillReceiveProps(nextProps) {
      if (nextProps.todo !== this.props.todo) {
        console.log("GOT IT")
        console.log(this.props.todo)
      }
      console.log(nextProps)
    }
  render() {
    return (
      <div>
        <h3>{this.props.todo}</h3>
      </div>
    );
  }
}

export default ToDoListItem;