import React from 'react'
import Board from '../Components/Board'
import FinalResults from '../Components/FinalResults'
import HomeBtn from '../Components/HomeBtn'
import '../Styles/finaldisplaystyles.scss'


function FinalDisplay({ finalPoints }) {
    return (
        <div className='container'>
            <aside >
                <FinalResults finalPoints={finalPoints} />
                <HomeBtn margin={'50px 0px'} />
            </aside>

            <Board />
        </div>
    )
}

export default FinalDisplay
