import React, { useState , useMemo, useEffect, useCallback, useRef} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import GetToDo from './components/GetToDo'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/add' element={<AddToDo></AddToDo>}></Route>
      <Route path="/" element={<GetToDo></GetToDo>}></Route>

    </Routes>
    </BrowserRouter>

    </>
  )
}









export default App
