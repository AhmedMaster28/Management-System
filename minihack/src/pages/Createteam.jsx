// import React from 'react'
import Navbar from '../components/Navbar'
import download from '../assets/download.jpeg'
import development from '../assets/development.jpeg'
import software from '../assets/software.jpeg'
import { Link } from 'react-router-dom'


const Createteam = () => {
  return (
    <>
    <Navbar />
    <h1 className='text-center fw-bold text-primary'>CREATE A TEAM</h1>
    
      <div className="container-xl mt-5 d-flex justify-content-around align-items-center flex-wrap gap-3">
        <div className="card" style={{width: "18rem" ,height:'23rem'}}>
          <img src={download} className="card-img-top " alt="Marketing Image" />
          <div className="card-body">
            <h5 className="card-title">MARKETING TEAM</h5>
            <p className="card-text">
            You can make a team marketing team and add members
            </p>
            
             <Link to=''> <button className='btn btn-outline-success'>START MAKING TEAM</button></Link>
           </div>
        </div>
        <div className="card" style={{width: "18rem",height:'23rem'}}>
          <img src={development} className="card-img-top " alt="Development Team Image" />
          <div className="card-body">
            <h5 className="card-title">DEVELOPMENT TEAM</h5>
            <p className="card-text">
              You can make a team marketing team and add members 
            </p>
            <Link to=''> <button className='btn btn-outline-success'>START MAKING TEAM</button></Link>
          </div>
        </div>
        <div className="card" style={{width: "18rem",height:'23rem'}}>
          <img src={software} className="card-img-top " alt="Software Team Image" />
          <div className="card-body">
            <h5 className="card-title">SOFTWARE TEAM</h5>
            <p className="card-text">
            You can make a team marketing team and add members
            </p>
            <Link to=''> <button className='btn btn-outline-success'>START MAKING TEAM</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createteam;
