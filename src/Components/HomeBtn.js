import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";




function HomeBtn({ margin }) {


    const btnStyles = {
        textDecoration: 'none',
        fontSize: '1.25rem',
        color: 'white',
        padding: '20px',
        width: '150px',
        textAlign: 'center',
        height: '60px',
        margin: margin
    }


    let navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    return (

        <Button onClick={handleClick} variant='contained' style={btnStyles} >
            Inicio
        </Button>

    )
}

export default HomeBtn
