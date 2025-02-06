import './App.css'
import { ToastContainer } from 'react-toastify'

import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import MainApp from './components/MainApp'
function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/main-app/:id' element={<MainApp />}></Route>
      </Routes>
    </>
  )
}

export default App
