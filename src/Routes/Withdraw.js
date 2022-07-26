import '../App.css';
import React, {useContext} from 'react';
import {UserContext} from '../UserContext';

function Withdraw() {
  const {value, setValue} = useContext(UserContext)
  const handleClick = ()=>{
    let withdrawal = document.getElementById('withdrawal-value').value;
    if(+value[0].balance - +withdrawal < 0){
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
    let total = +value[0].balance - +withdrawal;
    let newArr = [...value];
    newArr[0].balance = total;
    setValue(newArr)
  }

    return(
      <div className="center-this">
        <div className='card'>
            <h1 className="card-header bg-dark">Withdrawals</h1> 
            <h4>Account Balance: {value[0].balance}</h4>
            <input className="inner-input" type="text" id="withdrawal-value" name="withdrawal"/>
            <button className="inner-button" onClick={handleClick}>Withdraw</button>
        </div>
      </div>
  )
}

export default Withdraw;


