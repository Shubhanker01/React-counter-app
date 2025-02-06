import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import UserForm from './components/UserForm'
import { ToastContainer } from 'react-toastify'
import TextEditor from './components/TextEditor'

function App() {

  return (
    <>
      <ToastContainer />
      <UserForm />
      <Counter />
      <TextEditor/>
    </>
  )
}

export default App
