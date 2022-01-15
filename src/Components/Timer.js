import React from 'react'
import '../Styles/timerstyles.scss'

function Timer({ timerColor, timer }) {
    const style = {
        fontSize: '3rem',
        color: timerColor,
        marginTop: '10px'
    }




    return (
        <section className='timer__container'>
            <h2>Tiempo</h2>
            <h1 style={style}>
                {timer}
            </h1>
        </section>

    )
}

export default Timer
