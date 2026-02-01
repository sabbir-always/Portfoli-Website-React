import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"
import AppointmentPage from "./pages/AppointmentPage"
import ProjectPage from "./pages/ProjectPage"
import HomePage from "./pages/HomePage"
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
    </Routes>
  )
}

export default App
