import React, { Component } from 'react';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={todos:[]}
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    create(newTodoItem){
       this.setState({
           todos:[...this.state.todos, newTodoItem]
        });
   }

   remove(id){
       this.setState({
           todos: this.state.todos.filter(todo => todo.id !== id)
       });
   }

   update(id, updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
        if(todo.id ===id){
            return {...todo, task: updatedTask}
        }
        return todo;
    })
    this.setState({ todos: updatedTodos });
   }

   toggleCompletion(id){
       const updatedTodos = this.state.todos.map(todo => {
        if(todo.id ===id){
            return {...todo, completed: !todo.completed };
        }
        return todo;
    })
    this.setState({ todos: updatedTodos });
   }

    render(){
        const todo = this.state.todos.map(todo => {
            return <Todo 
            key={todo.id} 
            id={todo.id} 
            task={todo.task} 
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
            />
        })
        return(
            <div className="TodoList">
                <h1>
                    Todo List! <span>A Simple React Todo List App</span>
                </h1>
                <ul>{todo}</ul>
                <NewTodoForm createToDoItem={this.create}/>
            </div>
        )
    }
}



export default TodoList;