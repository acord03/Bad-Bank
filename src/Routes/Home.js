import React from 'react';
import img from '../img.jpg'

const Home = () =>{
  return(
    <div className="center-this">
      <h1 className="header">Bad Bank</h1>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
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