import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Wallet from './pages/Wallet'


function App() {
  return(
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/wallet' element={<Wallet/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
