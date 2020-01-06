import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';

import TodosForm from './components/TodosForm';


class App extends Component{
constructor (){
super();
this.state = {
todos : todos
}
}



  render(){

   const todos = this.state.todos.map((todo, i) => {
      return(
        <div className="col-md-4">
        <div className="card mt-4">
          <div className="cad-header"> 
          <h3>{todo.title}</h3>
          <span className="badge badge-pill badge-danger ml-2">
{todo.priority}
          </span>
          </div>
          <div className="card-body">

      <p><strong>Description:</strong> {todo.description}</p>
      <p><strong>Responsable:</strong> {todo.responsible}</p>
          </div>
        </div>
        </div>
      )
    })


  return (
<div className="App"> 

<nav className="navbar navbar-dark bg-dark">
<a href=" " className="text-white">
Tasks
<span className="badge badge-pill badge-light ml-2">
  {this.state.todos.length}
</span> 
    </a>
    </nav>
<div className="container">



  <div className="row mt-4">

  <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodosForm onAddTodo={this.handleAddTodo}></TodosForm>
            </div>


            <div className="col-md-8">
              <div className="row">
    {todos}
    </div>
    </div>
    </div>
    </div>
    </div>

);


  }
}
export default App;