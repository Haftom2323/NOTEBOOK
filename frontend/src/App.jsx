import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'
import CreatePage from './pages/CreatePage'
import NoteDetailsPage from './pages/NoteDetailsPage'

function App() {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App