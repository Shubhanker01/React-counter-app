import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import UserForm from './components/UserForm'
import TextEditor from './components/TextEditor'

function App() {

  return (
    <>
      <UserForm />
      <Counter />
      <TextEditor />
    </>
  )
}

export default App
