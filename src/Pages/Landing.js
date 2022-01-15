import React, { useState } from 'react'
import Board from '../Components/Board';
import { useNavigate } from 'react-router-dom'
import '../Styles/landingstyles.scss'
import useWindowDimensions from '../Assets/useWindowDimensions';


function Landing({ setUserData, setIsLogged }) {
    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const { width } = useWindowDimensions();
    let navigate = useNavigate()
    let boardStyle = {}



    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length > 0 && birth.length > 0) {
            if (name.length > 2 && birth.length > 1) {
                if (birth < 99 && birth > 5) {
                    setUserData([name, birth])
                    setIsLogged(true)
                    setTimeout(() => {
                        navigate(`/game`)
                    }, 1000);
                } else {
                    alert('Dale no seas zapallo pone tu edad posta')
                }
            } else {
                alert('Utiliza como minimo 3 caracteres')
            }
        } else {
            alert('Completa todos los campos')
        }


    }


    // check width for board style props
    if (width > 450) {
        boardStyle = {
            margin: '0'
        }
    } else {
        boardStyle = {
            margin: '20px auto'
        }
    }

    return (
        <div className='landing__container'>

            <section>
                <h2>Demostra cuanto conoces al 10</h2>
                <h3>Ingresa tus datos a continuacion para ser parte del ranking </h3>
                <form action="#" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className='input__container'>

                        <input type="text"
                            autoFocus
                            maxLength="18"
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Nombre o Apodo' />



                        <input type="number"
                            onChange={(e) => setBirth(e.target.value)}
                            placeholder='Edad'
                            max={99}
                            min={10}
                        />

                    </div>

                </form>
                <button onClick={handleSubmit}>Empezar</button>

            </section>

            <Board boardStyle={boardStyle} />
        </div>
    )
}

export default Landing
