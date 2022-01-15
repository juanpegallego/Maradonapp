import React, { useEffect, useState } from 'react'
import AnswerBox from './AnswerBox'
import ImgContainer from './ImgContainer'
import '../Styles/mainstyles.scss'
import db from '../Assets/Firebase'
import { onSnapshot, collection, addDoc } from "@firebase/firestore"
import Timer from './Timer'
import { useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner'
import Points from './Points'


function Main({ setPoints, points, userData, setFinalPoints }) {
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(0);
    const [btnColor, setBtnColor] = useState('primary');
    const [mixUp, setMixup] = useState([]);
    const [blurImg, setBlurImg] = useState('blur(0px)');
    const [timer, setTimer] = useState(10);
    const [timerColor, setTimerColor] = useState('white')
    let navigate = useNavigate()

    const setResultsInDB = async (userData, points) => {
        try {
            await addDoc(collection(db, "results"), {
                nombre: userData[0],
                edad: userData[1],
                puntos: points,
            });
        } catch (e) {
            console.error("Error actualizando la base de datos: ", e);
        }
    }

    const handleClick = (userChoice) => {
        if (userChoice == data[counter].correcta) {
            setBtnColor('success')
            setPoints(points + 10)
        } else {
            setBtnColor('error')
        }
        setBlurImg('blur(0px)')

        setTimeout(() => {
            checkAvailableQuestions()
            setBtnColor('primary')
        }, 1000);
    }

    const checkAvailableQuestions = () => {
        if (counter + 1 == data.length) {
            setResultsInDB(userData, points)
            setFinalPoints(points)
            navigate('/final')

        } else {
            restart()
        }
    }

    const restart = () => {
        setTimer(10)
        setCounter(counter + 1)
        setMixup([data[counter + 1].correcta, ...data[counter + 1].incorrecta].sort(() => Math.random() - 0.5))
        setBlurImg('blur(0px)')
    }

    useEffect(() => {
        onSnapshot(collection(db, "imagenes"), (snapshot) => {
            setData(snapshot.docs.map(doc => doc.data()));
        })
    }, [])


    useEffect(() => {
        if (data.length > 0) {
            //mixing up the answers
            setMixup([data[counter].correcta, ...data[counter].incorrecta].sort(() => Math.random() - 0.5))
        }
    }, [data])


    useEffect(() => {
        if (timer < 0) {
            checkAvailableQuestions()
        }
        if (timer < 4) {
            setTimerColor('red')
        } else {
            setTimerColor('white')
        }
        const watch = setTimeout(() => {
            if (timer >= 0) setTimer(timer - 1);
        }, 1000)

        return () => window.clearTimeout(watch)
    }, [timer])



    return (
        data[counter] !== undefined ?

            <div className='main__container'>
                <div className='game__header'>
                    <Points
                        points={points}
                    />
                    <Timer
                        timerColor={timerColor}
                        timer={timer}
                    />
                </div>

                <ImgContainer
                    src={data[counter].href}
                    blurImg={blurImg} />

                <AnswerBox
                    mixUp={mixUp}
                    btnColor={btnColor}
                    handleClick={handleClick}
                />
            </div>
            :
            (
                <Oval color="#00BFFF" height={50} width={50} className='spinner' />
            )
    )
}

export default Main
