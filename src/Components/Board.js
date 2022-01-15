import React, { useState, useEffect } from 'react'
import db from '../Assets/Firebase'
import { onSnapshot, collection } from "@firebase/firestore"
import '../Styles/boardstyles.scss'
import { Oval } from 'react-loader-spinner'


function Board({ boardStyle }) {
    const [data, setData] = useState(null)
    const [rankingOrdenado, setRankingOrdenado] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, "results"), (snapshot) => {
            setData(snapshot.docs.map(doc => doc.data()));
        })
    }, [data])


    useEffect(() => {
        if (data) {
            setRankingOrdenado(data.sort(((a, b) => b.puntos - a.puntos)))
        }
    })





    if (data !== null) {
        if (data.length > 0) {
            return (

                <section className='board__container'>
                    <h1 className='title'>Ranking</h1>
                    <table style={boardStyle}>
                        <tbody>
                            <tr className='table__subtitle'>
                                <td></td>
                                <td>Nombre</td>
                                <td>Edad</td>
                                <td>Puntos</td>
                            </tr>
                        </tbody>
                        {rankingOrdenado.slice(0, 5).map((item, myKey) =>
                            <tbody key={myKey}>
                                <tr>
                                    <td>{myKey + 1}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.edad}</td>
                                    <td>{item.puntos}</td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </section>

            )
        }

        else return (
            <p className='error__msg'>Todavia no hay resultados suficientes para calcular la puntuacion</p>
        )

    } else return (
        <div className='spinner__container'>
            <Oval color="#00BFFF" height={50} width={50} className='spinner' />
        </div>
    )
}

export default Board
