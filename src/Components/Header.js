import React from 'react'

function Header({title}) {
    const style = {
        margin:'50px auto',
        color:'white',
        textAlign:'center'
    }
    return (
        <div>
            <h1 style={style}>{title}</h1>
        </div>
    )
}

export default Header
