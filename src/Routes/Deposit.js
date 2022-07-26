import '../App.css';
import React, {useContext} from 'react';
import {UserContext} from '../UserContext'

function Deposit(){
    const {value, setValue} = useContext(UserContext);
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
        let total = +deposit + +value[0].balance;
        let newArr = [...value];
        newArr[0].balance = total;
        setValue(newArr)
    }
    const debugLog = ()=>{
        console.log(value)
    }
    return(
        <div className="center-this">
            <div className="card">
                <h1 className="card-header bg-dark">Deposit Page</h1> 
                <h4>Account Balance: {value[0].balance}</h4>
                <input type="text" id="deposit-value" className="inner-input"/>
                <button className="inner-button" onClick={handleClick}>Deposit</button>
                <button onClick={debugLog}>debuglog</button>
            </div>
        </div>
    )
}
export default Deposit;