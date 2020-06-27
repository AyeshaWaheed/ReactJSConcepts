import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends React.Component {
  // markComplete = () => {        Reverse S4
  //   console.log('Hello')
  // }
  render(){
//       console.log(this.props.todos)
//   return (
//     <div className="App">
//        <h1>Todos</h1>
//     </div>
//   );
    return this.props.todos.map((todo) => (
    // <h3>{ todo.title }</h3>
      //  <TodoItem key={todo.id} todo={todo} />
      <TodoItem key={todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo}/>
    ))
  }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
