import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Wallet from './pages/Wallet'
import LandingPage from './pages/LandingPage'
import Profile from './pages/Profile'
import { RecoilRoot } from 'recoil'


function App() {
  return(
    <>
      <RecoilRoot>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/wallet' element={<Wallet/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
