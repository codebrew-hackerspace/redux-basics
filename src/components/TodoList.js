import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Todo from "./Todo";

const StyledList = styled.ul`
  font-size: 1.5em;
  color: palevioletred;
  list-style: none;
  list-style-type: none;
`;

const TodoList = ({ todos }) => (
  <StyledList>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </StyledList>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TodoList;
