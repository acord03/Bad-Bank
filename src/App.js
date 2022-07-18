import './App.css';
import Nav from './Nav';
import Withdraw from './Routes/Withdraw';
import AllData from './Routes/AllData';
import Deposit from './Routes/Deposit';
import Home from './Routes/Home';
import CreateAccount from './Routes/CreateAccount';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import {Balance} from './Balance.js';

function App() {
  const [value, setValue] = useState(100)
  return (
      <Balance.Provider value={{value, setValue}}>
        <Router>
          <div className="App">
            <Nav className="main-navbar"/>
            
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="create-account" element={<CreateAccount/>}/>
                
                <Route path="/withdraw" element={<Withdraw balance={{value, setValue}}/>}/>
                <Route path='/deposit' element={<Deposit balance={{value, setValue}}/>}/>
                
                <Route path="/all-data" element={<AllData/>}/>
              </Routes>
            
          </div>
        </Router>
      </Balance.Provider>
  );
}



export default App;
