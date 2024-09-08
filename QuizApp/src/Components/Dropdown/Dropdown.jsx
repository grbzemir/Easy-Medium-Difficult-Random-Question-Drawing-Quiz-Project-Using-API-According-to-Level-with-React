import React from 'react'
import PropTypes from 'prop-types'
import './Dropdown.css'

const Dropdown = ({ data, setDifficultyChange }) => {
    return (
        <div className='dropdown'>
            <select onChange={(e) => setDifficultyChange(e.target.value)} name="" id="">
                {data.map((dt, i) => (
                    <option key={i} value={dt}>{dt}</option>
                ))}
            </select>
        </div>
    )
}

Dropdown.propTypes = {
    data: PropTypes.array.isRequired,
    setDifficultyChange: PropTypes.func.isRequired
}

export default Dropdown
