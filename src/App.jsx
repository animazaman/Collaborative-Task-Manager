import {Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import OpenPage from './Components/OpenPage/OpenPage'
import UserProfile from './Components/UserProfile/UserProfile'
import { useState } from 'react'


function App() {
  
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleRegistration = (userData) => {
    // Store user registration data in local storage
    const updatedUsers = [...registeredUsers, userData];
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    setRegisteredUsers(updatedUsers);
  };

  const handleLogin = (loginData) => {
    // Retrieve user registration data from local storage
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers'));

    // Check if the user exists in local storage
    const user = storedUsers.find(
      (u) => u.username === loginData.username && u.password === loginData.password
    );

    if (user) {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <HomePage></HomePage>
      <Routes>
        <Route path='/' element={<OpenPage></OpenPage>}></Route>
        <Route path='/user-profile' element={<UserProfile></UserProfile>}></Route>
        <Route path='/sign-in' element={<SignIn onLogin={handleLogin}></SignIn>}></Route>
        <Route path='/sign-up' element={<SignUp onRegister={handleRegistration}></SignUp>}></Route>
      </Routes>
    </>
  )
}

export default App
