import React from 'react'
import '../Styles/timerstyles.scss'
import useWindowDimensions from '../Assets/useWindowDimensions';



function Timer({ timerColor, timer }) {


    const { width } = useWindowDimensions();


    let style = {}



    if (width > 450) {

        style = {
            fontSize: '3rem',
            color: timerColor,
            marginTop: '10px'
        }


    } else {

        style = {
            fontSize: '1.5rem',
            color: timerColor,
            marginTop: '10px'
        }


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
