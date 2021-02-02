import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"

import TodoContainer from "./functionBased/components/TodoContainer"

import "./functionBased/App.css"

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <TodoContainer/>
        </BrowserRouter>
    </StrictMode>
    , document.getElementById("root")
    )