import React from 'react'
import '../Styles/answerstyles.scss'
import Button from '@mui/material/Button';


function Answer({ answer, onClick, btnColor }) {
    return (
        <div className='answer__container' >
            <Button onClick={onClick} variant='contained' color={btnColor}>
                {answer}
            </Button>
        </div>
    )
}

export default Answer
