import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Home } from './pages/home/index.tsx'
import { Student } from './pages/student/index.tsx'
import { Students } from './pages/students/index.tsx'
import { Teachers } from './pages/teachers/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/student/:id' element={<Student />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </BrowserRouter>

    <App />
  </StrictMode>,
)
