import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends React.Component {
  render(){
//       console.log(this.props.todos)
//   return (
//     <div className="App">
//        <h1>Todos</h1>
//     </div>
//   );
    return this.props.todos.map((todo) => (
    // <h3>{ todo.title }</h3>
       <TodoItem key={todo.id} todo={todo} />
    ))
  }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
