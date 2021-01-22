import React from 'react'

class InputTodo extends React.Component{
    
    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            // e.target.value refers to the text input into the form
            [e.target.name]: e.target.value
        })
    }

    // Handles the ENTER button press
    handleSubmit = e => {
        e.preventDefault() // important to prevent the default behavior
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: ""
            })
        } else {
            alert("Please write item")
        }
        
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit} className = "form-container">
                <input 
                    className = "input-text"
                    name = "title"
                    type="text"
                    placeholder = "Add todo"
                    value = {this.state.title}
                    onChange = {this.onChange}
                />
                <button className = "input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo