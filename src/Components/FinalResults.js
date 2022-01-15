import React, { useState, useEffect } from 'react'
import '../Styles/finalresultsstyles.scss'

function FinalResults({ finalPoints }) {
    const [mensajeFinal, setMensajeFinal] = useState('')
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(0)


    useEffect(() => {
        if (finalPoints > 100) {
            setMensajeFinal('Creemos que sos un capo')
        } else if (finalPoints < 100 && finalPoints > 60) {
            setMensajeFinal('Creemos que no sos tan capo')
        } else {
            setMensajeFinal('Creemos que falta estudiar un poco la vida del 10')
        }

        setRespuestasCorrectas(finalPoints / 10)
    }, [])




    return (
        <div className='text__container'>
            <h1>Hiciste {finalPoints} Puntos</h1>
            <p className='final__msg'>{mensajeFinal}</p>
            <p>Respondiste correctamente {respuestasCorrectas} de 18 preguntas</p>
        </div>
    )
}

export default FinalResults
