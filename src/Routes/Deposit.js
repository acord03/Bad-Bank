import '../App.css';
import React, {useContext, useState} from 'react';
import {UserContext} from '../UserContext'

function Deposit(){
    const {value, setValue} = useContext(UserContext);
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
        let total = +deposit + +value[0].balance;
        let newArr = [...value];
        newArr[0].balance = total;
        setValue(newArr)
    }
    
    return(
        <div className="center-this">
            <div className="card">
                <h1 className="card-header bg-dark">Deposit Page</h1> 
                <h4>Account Balance: {value[0].balance}</h4>
                <form onSubmit={handleClick}>
                    <input type="text" id='deposit-value' className="inner-input" onChange={(e)=>{setDeposit(e.target.value)}}/>
                    <br/>
                    <button className="inner-button" disabled={deposit.length < 1 ? true: false}>Deposit</button>
                </form>
            </div>
        </div>
    )
}
export default Deposit;