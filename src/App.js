import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {v4 as uuid} from "uuid";

import './App.css';

class App extends React.Component {
  state = {
    todos : [
      {
        id : 1,
        title : 'Take out the trash',
        completed : true
      },
      {
        id : 2,
        title : 'Dinner with wife',
        completed : true
      },
      {
        id : 3,
        title : 'Meeting with boss',
        completed : false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  //Delete Todo 
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  //Add Todo
  addTodo = (title) => {
    // console.log(title)
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render(){
  return (
    <div className="App">
       <div className="container">
         <Header />
         <AddTodo addTodo={this.addTodo}/>
         <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>   
       </div>       
    </div>
  );
  }
}

export default App;
