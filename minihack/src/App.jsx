
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {Routes, Route} from 'react-router-dom'
import Createteam from './pages/Createteam'
import Users from './pages/Users'
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/create" element={<Createteam/>}/>
      <Route path="/user" element={<Users/>}/>
      


    </Routes>
    </>
  )
}

export default App
