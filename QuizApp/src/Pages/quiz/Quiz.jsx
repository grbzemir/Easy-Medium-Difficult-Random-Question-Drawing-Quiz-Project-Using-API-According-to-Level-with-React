import React, { useEffect } from 'react'
import './Quiz.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import * as Api from '../../Api/Api'
import QuestionCard from '../../Components/Dropdown/QuestionCard/QuestionCard'
import Modal from '../../Components/Modal/Modal'

const Quiz = () => {

    const { difficulty, amount } = useParams();
    const [questionsData, setQuestions] = useState([])
    const [score, setScore] = useState(0)
    const [count, setCount] = useState(0)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const data = await Api.fetchQuizData(amount, difficulty)
            setQuestions(data)
        }
        getData();
    }, [])

    console.log(questionsData, "questionsData");

    return (
        <div className='Quiz'>
            {
                modal ? <Modal score={score} /> :
                    <QuestionCard
                        questionsData={questionsData}
                        score={score}
                        setScore={setScore}
                        count={count}
                        setCount={setCount}
                        modal={modal}
                        setModal={setModal}
                    />
            }

        </div>
    )
}

export default Quiz
