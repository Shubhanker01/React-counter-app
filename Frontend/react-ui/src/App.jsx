import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import UserForm from './components/UserForm'

import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer />
      <UserForm />
      <Counter />
    </>
  )
}

export default App
