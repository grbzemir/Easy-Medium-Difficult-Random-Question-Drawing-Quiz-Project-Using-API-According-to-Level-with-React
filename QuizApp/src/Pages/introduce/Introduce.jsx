import React from 'react'
import './Introduce.css'
import Dropdown from '../../Components/Dropdown/Dropdown'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
    const difficulty = ['easy', 'medium', 'hard']
    const [difficultyChange, setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTION = 10
    console.log(difficultyChange, "difficultyChange");

    const startQuiz = () => {

        if (difficultyChange) {
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTION}`)
        }

    }
    return (
        <div className='introduce'>
            <div className="introduce-container">
                <img src="https://www.pngitem.com/pimgs/m/146-1468479_quiz-clipart-quiz-time-quiz-logo-png-transparent.png" alt="quiz" />
                <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
                <div onClick={startQuiz} className='introduce-btn'>Quiz e Başla </div>
            </div>
        </div>
    )
}

export default Introduce
