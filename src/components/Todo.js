import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ id, onClick, completed, text }) => (
  <li
  onClick={onClick}
  style={{
    color: completed ? 'green' : 'red'
  }}
  >
       <input type="checkbox" id="opt2"/>
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default Todo
