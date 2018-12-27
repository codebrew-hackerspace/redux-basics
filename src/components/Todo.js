import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({text }) => (
  <li>
       <input type="checkbox" id="opt2"/>
    {text}
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo
