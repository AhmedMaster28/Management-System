// import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
  <Navbar />
  <div className='container-xl d-flex justify-content-around align-items-center flex-wrap mt-5'>
  <div className="card" style={{width: '25rem', height:'11rem'}}>
  <div className="card-body">
    <h5 className="card-title">MAKE A TEAM`</h5>
    <p className="card-text">In this you will make the team and add members as an admin.</p>
    <Link to='/create'><button className='btn btn-success'>MAKE A TEAM</button></Link>
  </div>
</div>
<div className="card" style={{width: '25rem', height:'11rem'}}>
  <div className="card-body">
    <h5 className="card-title">JOIN A TEAM</h5>
  
    <p className="card-text">In this you will join someones team as a member .</p>
<Link to='/user'><button className='btn btn-success'>JOIN A TEAM</button></Link>
  </div>
</div>
  </div>
    </>
  )
}

export default Dashboard
