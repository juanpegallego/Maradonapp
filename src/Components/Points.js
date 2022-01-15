import React from 'react'
import useWindowDimensions from '../Assets/useWindowDimensions';


function Points({ points }) {

    const { width } = useWindowDimensions();

    let section = {}
    let h1 = {}
    let h2 = {}


    if (width > 450) {
        section = {
            color: 'white',
            width: '150px',
            height: '150px',
            textAlign: 'center',
            padding: '0px',
            display: 'flex',
            justifyContent: "center",
            flexDirection: 'column'
        }
        h1 = {
            fontSize: '3rem',
            marginTop: '10px'
        }
        h2 = {
            fontSize: '2rem'
        }
    } else {
        section = {
            color: 'white',
            width: '100px',
            position: 'relative',
            textAlign: 'center',
            padding: '10px'
        }

        h1 = {
            fontSize: '1.5rem',
            marginTop: '10px'
        }
        h2 = {
            fontSize: '1.25rem',
            marginTop: '10px'
        }
    }


    return (
        <section style={section}>
            <h2 style={h2}>Puntos</h2>
            <h1 style={h1}>
                {points}
            </h1>
        </section>

    )
}

export default Points
