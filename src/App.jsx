import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './home/Home'
import Detail from './detail/Detail'


function App() {

  return (
    < div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/activity/:id" element={<Detail />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
