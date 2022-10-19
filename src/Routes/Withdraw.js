import '../App.css';
import React, {useContext, useState} from 'react';
import {UserContext} from '../UserContext';
import {Submissions} from '../Submissions'

function Withdraw() {
  const {submissions, setSubmissions} = useContext(Submissions)
  const {value, setValue} = useContext(UserContext)
  const [withdrawal, setWithdrawal] = useState('')
  const handleClick = (e)=>{
    e.preventDefault()
    if(+value[0].balance - +withdrawal < 0){
      alert('Insufficient funds')
      return
    }
    if(withdrawal <= 0){
      alert('Transactions must be in dollar amounts greater than 0');
      return
    }
    if(isNaN(withdrawal)){
      alert('Not A Number')
      return
    }
    let newSubmission = submissions.concat(`user withdrew $${withdrawal}`);
    setSubmissions(newSubmission)
    let total = +value[0].balance - +withdrawal;
    let newArr = [...value];
    newArr[0].balance = total;
    setValue(newArr)
  }

    return(
      <div>
        <div className="user-display">
          <h2>username</h2>
        </div>
        <div className="center-this">
          <div className='card'>
              <h1 className="card-header bg-dark">Withdrawals</h1> 
              <h4>Account Balance: {value[0].balance}</h4>
              <form onSubmit={handleClick}>
                <input type="text" id='deposit-value' className="inner-input" onChange={(e)=>{setWithdrawal(e.target.value)}}/>
                <br/>
                <button className="inner-button" disabled={withdrawal.length < 1 ? true: false}>Withdraw</button>
              </form>
          </div>
        </div>
      </div>
  )
}

export default Withdraw;


