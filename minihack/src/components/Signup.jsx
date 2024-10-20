import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'

const Auth = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const signIn =async()=>{
        await createUserWithEmailAndPassword(auth, email, password)
        console.log(auth.currentUser)
    }


  return (
    <>
    <div>

    <form action="" className='form' >

      <h1>sign up form</h1>

      <input type="email" className="form-label" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" className="form-label" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={signIn}>sign up</button>
    </form>
    </div>
    
    </>
  )
}

export default Auth
