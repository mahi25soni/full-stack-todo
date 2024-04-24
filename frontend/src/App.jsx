import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './components/AddToDo'
import GetToDo from './components/GetToDo'

function App() {

  return (
    <>
      <AddToDo></AddToDo>
      <GetToDo></GetToDo>
    </>

  )
}

export default App
