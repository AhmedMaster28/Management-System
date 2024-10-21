import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
// import Link from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const Login = () => {

    const navigate=useNavigate();
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/Dashboard')
        console.log('User logged in successfully');
      } catch (error) {
        setEmail('');
        setPassword('');
        setError("Incorrect email or password",error.message);
        
      }
    }
  
    
  return (
    <>
    <div>
      <h2 className='text-center mt-4 fw-bold text-primary'>LOGIN FOR TEAM MANAGER APP</h2>
      <div className='signup w-sm-75 w-md-75 w-lg-75 w-50 block mx-auto'>
      <div className=' mt-5 d-flex flex-column justify-content-center align-items-center'>
        <h1 className='fw-bold text-center mt-5'>LOGIN</h1>
      <form onSubmit={handleLogin} className='mt-5 d-flex flex-column justify-content-center align-items-center' action='../pages/Dashboard'>
        <input
          type="email"
          placeholder="Email"
          className='form-control '
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <br />
        <input
          type="password"
          placeholder="Password"
           className='form-control '
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" className='btn btn-success'>Login</button>
      <p>Dont have an account?<Link to="/"> Sign Up</Link></p>
      </form>
          </div>
          </div>
    </div>


    </>
  )
}

export default Login
