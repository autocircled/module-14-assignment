import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TeamPage from './pages/TeamPage'
import ServicePage from './pages/ServicePage'
import TestimonialsPage from './pages/TestimonialsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProjectPage from './pages/ProjectPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/testimonials' element={<TestimonialsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

