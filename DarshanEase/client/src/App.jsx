import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Temples from "./pages/Temples"
import Slots from "./pages/Slots"
import Booking from "./pages/Booking"
import Tickets from "./pages/Tickets"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </Router>
  )
}

export default App