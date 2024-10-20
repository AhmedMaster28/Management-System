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
      <h1>sign up form</h1>

      <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={signIn}>sign up</button>
    </>
  )
}

export default Auth
