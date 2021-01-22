import React, { StrictMode } from "react"
import ReactDOM from "react-dom"

import TodoContainer from "./functionBased/components/TodoContainer"

import "./functionBased/App.css"

ReactDOM.render(
    <StrictMode>
        <TodoContainer/>
    </StrictMode>
    , document.getElementById("root")
    )