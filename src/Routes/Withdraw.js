import '../App.css';
import React, {useContext, useState} from 'react';
import {UserContext} from '../UserContext';
import {Submissions} from '../Submissions'
import { SignedIn } from '../SignedIn';
import { db } from '../firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

function Withdraw() {
  const [balance, setBalance] = useState(null)
  const {signedIn} = useContext(SignedIn)
  const {submissions, setSubmissions} = useContext(Submissions)
  const {value} = useContext(UserContext)
  const [withdrawal, setWithdrawal] = useState('')
  const handleClick = (e)=>{
    e.preventDefault()
    if(+balance - +withdrawal < 0){
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

    let newBal = +balance - +withdrawal;
    let docRef = doc(db, 'users', value.uid)
    setDoc(docRef, {
      balance: newBal
    })

    let newSubmission = submissions.concat(`user withdrew $${withdrawal}`);
    setSubmissions(newSubmission)
  }

  if(signedIn === true){
    let docRef = doc(db, "users", value.uid)
    onSnapshot(docRef, (doc)=>{
        let res = doc.data()
        setBalance(res.balance)
    })
  }


  return(
    <div>
      {signedIn === true &&
        <div className="user-display">
          <h2>{value.email}</h2>
        </div>
      }
      <div className="center-this">
        <div className='card'>
          <h1 className="card-header bg-dark">Withdrawals</h1> 
          {signedIn === true && <h4>Account Balance: {balance}</h4>}
          <form onSubmit={handleClick}>
            {signedIn === false && <h4>You must be signed in in order to make withdrawals</h4>}
            {signedIn === true && <input type="text" id='deposit-value' className="inner-input" onChange={(e)=>{setWithdrawal(e.target.value)}}/>}
            <br/>
            {signedIn === true &&<button className="inner-button" disabled={withdrawal.length < 1 ? true: false}>Withdraw</button>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Withdraw;


