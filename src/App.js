import './App.css';
import Nav from './Nav';
import Withdraw from './Routes/Withdraw';
import AllData from './Routes/AllData';
import Deposit from './Routes/Deposit';
import Home from './Routes/Home';
import CreateAccount from './Routes/CreateAccount';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import {UserContext} from './UserContext';
import {Submissions} from './Submissions';
import { SignedIn } from './SignedIn';
import Login from './Routes/Login';

function App() {
  const [value, setValue] = useState({email: 'email@email.com', password: 'idksumthn', balance: 500})
  const [submissions, setSubmissions] = useState([])
  const [signedIn, setSignedIn] = useState(false)
  return (
    <SignedIn.Provider value={{signedIn, setSignedIn}}>
      <Submissions.Provider value={{submissions, setSubmissions}}>
        <UserContext.Provider value={{value, setValue}}>
          <Router>
            <div className="App">
              <Nav className="main-navbar"/>
              
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/create-account" element={<CreateAccount/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path="/withdraw" element={<Withdraw />}/>
                  <Route path='/deposit' element={<Deposit />}/>
                  
                  <Route path="/all-data" element={<AllData/>}/>
                </Routes>
              
            </div>
          </Router>
        </UserContext.Provider>
      </Submissions.Provider>
    </SignedIn.Provider>
  );
}



export default App;
