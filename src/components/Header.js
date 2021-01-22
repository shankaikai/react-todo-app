import React from 'react'

const Header = () => {
    const headerStyle = {
        padding: "30px 10px",
        lineHeight: "1.5em"
    }

    return (
        <header style = {headerStyle}> 
            <h1
                style={{
                    fontSize: "6rem",
                    fontWeight: "600",
                    marginBottom: "2rem",
                    lineHeight: "1em",
                    color: "black",
                    textTransform: "lowercase",
                    textAlign: "center",
                }}
            >Todos</h1>
        </header>
    )
}

export default Header