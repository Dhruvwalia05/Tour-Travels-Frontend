import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/index.html" element={<Admin />} /> {/* 👈 ADD THIS */}
        <Route path="*" element={<Home />} /> {/* 👈 fallback */}
      </Routes>
    </Router>
  )
}

export default App
