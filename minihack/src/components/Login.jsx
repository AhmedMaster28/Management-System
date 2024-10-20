import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
// import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect or show success message after login
        console.log('User logged in successfully');
      } catch (error) {
        setError(error.message);
      }
    }
  
    
  return (
    <>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin} action='../components/welcome.jsx'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" src="../components/welcome.jsx">Login</button>
      </form>
    </div>


    </>
  )
}

export default Login
