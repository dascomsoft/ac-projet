import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './home/Home'



function App() {

  return (
    < div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
