import Main from '../Components/Main'
import Points from '../Components/Points'
import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

function Game({ userData, setFinalPoints, isLogged }) {

    const [points, setPoints] = useState(0);
    let navigate = useNavigate()

    useEffect(() => {
        if (!(isLogged)) {
            alert('No estas logueado, seras redireccionado al home')
            navigate(`/`)
        }
    }, [])

    return (
        <div>


            <Main
                points={points}
                setPoints={setPoints}
                setFinalPoints={setFinalPoints}
                points={points}
                userData={userData}
            />
        </div>
    )

}

export default Game
