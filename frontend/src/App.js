import React, { Component } from 'react';
import './App.css';
import SingleTodo from './singleTodo';
import axios from 'axios';

class App extends Component {
  
  constructor() {
    super();
    this.baseurl = "http://127.0.0.1:8080/todo/"
    this.state = {
      todos: [],
      currentTodo: "",
      todo: "",
      _id: ""
    };
    this.getAllTodos()
  }

  onInputChange = e => {
    this.setState({ currentTodo: e.target.value })
  }

  getAllTodos = () => {
    let url = this.baseurl + "getAllTodo"
    axios.get(url)
    .then((res) => {
      this.setState(prevState => {
        todos: [...prevState.todos, res.data]
      })
    })
  }

  onClick = () => {
    let todosCopy = this.state.todos.slice()
    todosCopy.push(this.state.currentTodo);

    this.setState({todos: todosCopy, currentTodo: ""})
  }

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({ todos: todosCopy });
  }

  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return(
        <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
      );
    });

    return (
      <div>
        <input placeholder="Enter todo" value={this.state.currentTodo} onChange={this.onInputChange}/>
        <button id="add" onClick={this.onClick}>Add!</button>
        <br/>
        <div id="info">
        { this.state.todos.length === 0 ? "Nothing todo yet!" : <ul>{bulletedTodos}</ul>}
        </div>
      </div>
    );
  }
}

export default App;
