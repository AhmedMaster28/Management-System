import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Auth = () => {
  const navigate=useNavigate()
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const signIn =async()=>{
        await createUserWithEmailAndPassword(auth, email, password)
     
        navigate('/Login')
        
        console.log(auth.currentUser)
    }


  return (
    <>
      <h1 className='text-center mt-4 fw-bold text-primary'>WELCOME TO THE TEAM MANAGER APP</h1>
    <div className='signup w-50 block mx-auto '>
    <div className=' mt-5 d-flex flex-column justify-content-center align-items-center'>
    <form action="" className=' mt-5 d-flex flex-column justify-content-center align-items-center ' >
      <h1 className='p-4 '>Sign Up</h1>


      <input type="email" className="form-control widInp" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
      <br />
      <input type="password" className="form-control widInp" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
      <br />
      <Link to="/Login"><button onClick={signIn} className='btn btn-primary'><b>SIGN UP</b></button></Link>
      <p className='mt-3'>Already have an account?<Link  to="/Login"> Login</Link></p>
    </form>
    </div>
    </div>
    
    </>
  )
}

export default Auth
