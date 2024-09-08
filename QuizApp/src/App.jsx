import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Introduce from './Pages/introduce/Introduce'
import Quiz from './Pages/quiz/Quiz'


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Introduce />} />
          <Route path='/quiz/:difficulty/:amount' element={<Quiz />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
