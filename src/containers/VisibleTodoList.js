import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todos: state.allTodos
});

export default connect(mapStateToProps)(TodoList);
