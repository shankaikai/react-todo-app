import React, {useState} from 'react'
import { FaPlusCircle } from "react-icons/fa"

// using ReactHook
const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title: ""
    })
    // If object as state value, React will not merge the state returned by the useState Hook with that of the update passed to it

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setInputText({
                title: ""
            })
        } else {
            alert("Please write a todo item")
        }
    }

    return (
        <form onSubmit = {handleSubmit} className = "form-container">
            <input
                type = "text"
                className = "input-text"
                placeholder = "Add todo..."
                value = {inputText.title}
                name = "title"
                onChange = {onChange}
            />
            <button className = "input-submit">
                <FaPlusCircle/>
            </button>
        </form>
    )
}

export default InputTodo