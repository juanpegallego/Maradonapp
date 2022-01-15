import './App.css'
import React, { useState } from 'react'
import Game from './Pages/Game';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing';
import FinalDisplay from './Pages/FinalDisplay';

function App() {

  const [isLogged, setIsLogged] = useState(false)
  const [finalPoints, setFinalPoints] = useState(0)
  const [userData, setUserData] = useState({
    nombre: '',
    birth: ''
  })


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing
            setUserData={setUserData}
            setIsLogged={setIsLogged} />} />
          <Route path='/game' element={<Game
            userData={userData}
            setFinalPoints={setFinalPoints}
            isLogged={isLogged} />} />
          <Route path='/final' element={<FinalDisplay
            finalPoints={finalPoints} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
