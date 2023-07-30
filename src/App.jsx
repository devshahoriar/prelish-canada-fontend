import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Agency from './pages/Agency'
import Dashboard from './pages/Dashboard'
import AddNewPropaty from './pages/AddNewPropaty'
import Propaty from './pages/Propaty'
import LoginSignUp from './pages/LoginSignUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/agency/:id" element={<Agency />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add" element={<AddNewPropaty />} />
        <Route path="/propaty" element={<Propaty />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/register" element={<LoginSignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
