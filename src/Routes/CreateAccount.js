import '../App.css';
import {useState, useContext} from 'react'
import {UserContext} from '../UserContext';

function CreateAccount(){
    const {value, setValue} = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleClick = ()=>{
        let newAcc = {
            user: username,
            adress: email,
            pass: password,
            balance: 100
        }
        const newArr = value.concat(newAcc)
        setValue(newArr)
    }
    const logInfo = ()=>{
        console.log(value)
    }

    return(
        <div className="center-this">
            <div className="card">
                <h1 className="card-header bg-dark">Account Creation</h1> 
                <input type="text" id="username" className="inner-input" onChange={(e)=>{
                    setUsername(e.target.value)
                    console.log(username)
                }} placeholder="Username"/>
                <input type="text" id="email" className="inner-input" onChange={(e)=>{
                    setEmail(e.target.value)
                    console.log(email)
                }} placeholder="Email"/>
                <input type="text" id="password" className="inner-input" onChange={(e)=>{
                    setPassword(e.target.value)
                    console.log(password)
                }} placeholder="Password"/>
                <button className="inner-button" id="submit-button" onClick={handleClick} disabled={!username || !email || !password ? true: false}>Create Account</button>
                <button onClick={logInfo}>debug log</button>
            </div>
        </div>
    )
}

export default CreateAccount;