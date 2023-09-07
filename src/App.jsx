import {Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'

function App() {
  

  return (
    <>
      <HomePage></HomePage>
      <Routes>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='sign-up' element={<SignUp></SignUp>}></Route>
      </Routes>
    </>
  )
}

export default App
