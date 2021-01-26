import React, {useState, useEffect} from 'react'
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = props => {
    
    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    useEffect(() => {
        return () => {
            console.log('todo cleaning up...')
        }
    }, [])

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    
    // destructuring
    const { completed, id, title} = props.todo

    const { handleChangeProps, deleteTodoProps} = props

    return (
        <li className = {styles.item}>
            <div onDoubleClick = {handleEditing} style = {viewMode}>
                <input 
                type = "checkbox" 
                className = {styles.checkbox}
                checked = {completed}
                onChange = {
                    () => handleChangeProps(id)
                } /> 
                <button
                    onClick = {
                        () => deleteTodoProps(id)
                    }
                >
                <FaTrash style = {{
                    color: "orangered",
                    fontSize: "16px"
                }}/>
                </button>
                <span
                    style= {completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input 
                type = "text" 
                className = {styles.textInput} 
                style={editMode} 
                value = {title}
                onChange = {e => {
                    props.setUpdateProps(e.target.value, id)
                }}
                onKeyDown = {handleUpdatedDone}
                />
        </li>
    )

}

export default TodoItem