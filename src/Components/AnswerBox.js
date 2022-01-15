import React from 'react'
import Answer from './Answer'


function AnswerBox({ mixUp, handleClick, btnColor }) {
    return (

        <div className='answer__container'>
            <Answer
                answer={mixUp[0]}
                onClick={() => handleClick(mixUp[0])}
                btnColor={btnColor} />
            <Answer
                answer={mixUp[1]}
                onClick={() => handleClick(mixUp[1])}
                btnColor={btnColor} />
            <Answer
                answer={mixUp[2]}
                onClick={() => handleClick(mixUp[2])}
                btnColor={btnColor} />
            <Answer
                answer={mixUp[3]}
                onClick={() => handleClick(mixUp[3])}
                btnColor={btnColor} />
        </div>

    )
}

export default AnswerBox
