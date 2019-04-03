import React, { Component } from "react";
import Todos from "./Todos";
import Header from "./Layout/Header";
import AddTodo from "./AddTodo";


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "ligar para João",
        completed: false
      },
      {
        id: 2,
        title: "Reunião",
        completed: false
      },
      {
        id: 3,
        title: "Assistir jogo",
        completed: false
      }
    ]
  };
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    }
    this.setState({ 
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
