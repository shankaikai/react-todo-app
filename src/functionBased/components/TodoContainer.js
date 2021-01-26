import React, { useState, useEffect } from "react"
import TodosList from "./TodosList"
import Header from './Header'
import InputTodo from './InputTodo'
import {v4 as uuidv4} from 'uuid'

const TodoContainer = () => {

    const [todos, setTodos] = useState(getInitialTodos())

    // useEffect(() => {
    //     const temp = localStorage.getItem('todos')
    //     const loadedTodos = JSON.parse(temp)

    //     if (loadedTodos) {
    //         setTodos(loadedTodos)
    //     }
    // }, [setTodos])

    function getInitialTodos() {
        const temp = localStorage.getItem('todos')
        const savedTodos = JSON.parse(temp)
        return savedTodos || [] // either return savedTodos or empty string
    }

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
      }, [todos])
    
    // Use a REST API to pull fake todo items 
    // componentDidMount() { // this function is executed directly after 
    //     fetch("https://jsonplaceholder.typicode.com/todos") // fetch API used 
    //       .then(response => response.json())
    //       .then(data => {
    //           this.setState({todos: data})
    //       });
    //   }
    // componentDidMount() {
    //     const temp = localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)
    //     if (loadedTodos) {
    //         this.setState({
    //             todos: loadedTodos
    //         })
    //     }
    // }

    // componentDidUpdate() is called after every state or props change
    // check if prevState todos is different and update the local storage if so
    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.todos !== this.state.todos) {
    //         const temp = JSON.stringify(this.state.todos)
    //         localStorage.setItem("todos", temp)
    //     }
    // }

    // handleChange = (id) => {
    //     this.setState({
    //         todos: this.state.todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.completed = !todo.completed
    //             }
    //             return = todo
    //         })
    //     })
    // }
    
    const handleChange = id => {
        setTodos(prevState => 
            prevState.map(todo => {
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
        )
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            })
        ])
    }

    const addTodoItem = title => {
       const newTodo = {
           id: uuidv4(),
           title: title,
           completed: false
       }
       setTodos([...todos, newTodo])
           // spread operator grabbing all previous values in the this.state.todos
        //    todos: [...this.state.todos, newTodo]
    }


    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }


    return (
        <div className = "container">
            <div className = "inner">
                <Header/>
                <InputTodo
                    addTodoProps = {addTodoItem}
                />
                {/* Pass the function to the child component using props */}
                <TodosList 
                    todos = {todos} 
                    handleChangeProps = {handleChange}
                    deleteTodoProps = {delTodo}
                    setUpdateProps = {setUpdate}
                />
            </div>
        </div>
    )
    
    
}

export default TodoContainer 