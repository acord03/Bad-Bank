import React from 'react';
import img from '../img.jpg'

const Home = () =>{
  return(
    <div className="center-this">
      <div className="card">
        <h1 className="card-header bg-dark">Bad Bank</h1>
        <img src={img} className="card-img" alt="..." />
        <div className="card-body">
          <div>
          <p className="card-text">Welcome to Bad Bank inc. Where our motto is, "Security? What's that?"</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;