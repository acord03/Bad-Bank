import '../App.css';
import React, {useContext} from 'react';
import {Balance} from '../Balance'

function Deposit(){
    const {value, setValue} = useContext(Balance);
    const handleClick = ()=>{
        let deposit = document.getElementById('deposit-value').value;
        if(deposit <= 0){
            alert('Transactions must be in dollar amounts greater than 0');
            return
        }
        if(isNaN(deposit)){
            alert('NaN')
            return
        }
        let total = +deposit + +value;
        setValue(total)
    }
    
    return(
        <div className="center-this">
            <div className="card">
                <h1 className="card-header bg-dark">Deposit Page</h1> 
                <h1>Account Balance: {value}</h1>
                <input type="text" id="deposit-value" className="inner-input"/>
                <button className="inner-button" onClick={handleClick}>Deposit</button>
            </div>
        </div>
    )
}
export default Deposit;