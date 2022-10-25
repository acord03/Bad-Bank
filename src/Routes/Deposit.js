import '../App.css';
import React, {useContext, useState} from 'react';
import {UserContext} from '../UserContext'
import {Submissions} from '../Submissions'
import { SignedIn } from '../SignedIn';

function Deposit(){
    const {signedIn} = useContext(SignedIn)
    const {submissions, setSubmissions} = useContext(Submissions);
    const {value} = useContext(UserContext);
    const [deposit, setDeposit] = useState('')

    const handleClick = (e)=>{
        e.preventDefault()
        if(deposit <= 0){
            alert('Transactions must be in dollar amounts greater than 0');
            return
        }
        if(isNaN(deposit)){
            alert('Not A Number')
            return
        }
        let newSubmission = submissions.concat(`user deposited $${deposit}`);
        setSubmissions(newSubmission)
    }
    
    return(
        <div>
            {signedIn === true &&
                <div className="user-display">
                    <h2>{value}</h2>
                </div>
            }
            <div className="center-this">
                <div className="card">
                    <h1 className="card-header bg-dark">Deposits</h1> 
                    <h4>Account Balance: {value.balance}</h4>
                    <form onSubmit={handleClick}>
                        <input type="text" id='deposit-value' className="inner-input" onChange={(e)=>{setDeposit(e.target.value)}}/>
                        <br/>
                        <button className="inner-button" disabled={deposit.length < 1 ? true: false}>Deposit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Deposit;