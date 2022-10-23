import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import img from '../img.jpg'

const Home = () =>{
  const {value} = useContext(UserContext)
  return(
    <div>
      <div className="user-display">
        <h2>{value.email}</h2>
      </div>

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
    </div>
  )
};

export default Home;