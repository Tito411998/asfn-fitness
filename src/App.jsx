import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="bg-dark min-h-screen">
        <nav className="p-4 bg-primary flex justify-between items-center">
          <h1 className="text-2xl font-bold">ASFN</h1>
          <div>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/contact">تواصل معنا</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<h2 className="text-center text-3xl mt-20">Welcome to ASFN Fitness</h2>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
