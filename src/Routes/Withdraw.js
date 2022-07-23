import '../App.css';
import React, {useContext} from 'react';
import {Balance} from '../Balance';

function Withdraw() {
  const {value, setValue} = useContext(Balance)
  const handleClick = ()=>{
    let withdrawal = document.getElementById('withdrawal-value').value;
    if(+value - +withdrawal < 0){
      alert('Insufficient funds')
      return
    }
    if(withdrawal <= 0){
      alert('Transactions must be in dollar amounts greater than 0');
      return
    }
    if(isNaN(withdrawal)){
      alert('NaN')
      return
    }
    let total = +value - +withdrawal;
    setValue(total)
  }

    return(
      <div className="center-this">
        <div className='card'>
            <h1 className="card-header bg-dark">Withdrawals</h1> 
            <h1>Account Balance: {value}</h1>
            <input className="inner-input" type="text" id="withdrawal-value" name="withdrawal"/>
            <button className="inner-button" onClick={handleClick}>Withdraw</button>
        </div>
      </div>
  )
}

export default Withdraw;


