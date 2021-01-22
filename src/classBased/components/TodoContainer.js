import React from "react"
import TodosList from "./TodosList"
import Header from './Header'
import InputTodo from './InputTodo'
import {v4 as uuidv4} from 'uuid'

class TodoContainer extends React.Component {

    state = {
        todos: []
    }
    
    // Use a REST API to pull fake todo items 
    // componentDidMount() { // this function is executed directly after 
    //     fetch("https://jsonplaceholder.typicode.com/todos") // fetch API used 
    //       .then(response => response.json())
    //       .then(data => console.log(data));
    //   }
    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    }

    // componentDidUpdate() is called after every state or props change
    // check if prevState todos is different and update the local storage if so
    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }

    // handleChange = (id) => {
    //     this.setState({
    //         todos: this.state.todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.completed = !todo.completed
    //             }
    //             return todo
    //         })
    //     })
    // }
    
    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        // spread operator and toggle only the completed value
                        ...todo,
                        completed: !todo.completed
                    }
                    // todo.completed = !todo.completed
                }
                return todo
            })
        }))
    }

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    }

    addTodoItem = title => {
       const newTodo = {
           id: uuidv4(),
           title: title,
           completed: false
       }
       this.setState({
           // spread operator grabbing all previous values in the this.state.todos
           todos: [...this.state.todos, newTodo]
       })
    }

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        })
    }

    render() {
        return (
            <div className = "container">
                <div className = "inner">
                    <Header/>
                    <InputTodo
                        addTodoProps = {this.addTodoItem}
                    />
                    {/* Pass the function to the child component using props */}
                    <TodosList 
                        todos = {this.state.todos} 
                        handleChangeProps = {this.handleChange}
                        deleteTodoProps = {this.delTodo}
                        setUpdateProps = {this.setUpdate}
                    />
                </div>
            </div>
        )
    }
    
}

export default TodoContainer 