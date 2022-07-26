import '../App.css';
import {useState, useContext} from 'react'
import {UserContext} from '../UserContext';
import {Submissions} from '../Submissions'

function CreateAccount(){
    const {submissions, setSubmissions} = useContext(Submissions)
    const {value, setValue} = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        let newAcc = {
            user: username,
            adress: email,
            pass: password,
            balance: 100
        }
        let newSubmission = submissions.concat(newAcc);
        setSubmissions(newSubmission)
        const newArr = value.concat(newAcc)
        setValue(newArr)
    }
    
    return(
        <div className="center-this">
            <div className="card">
                <h1 className="card-header bg-dark">Account Creation</h1> 
                <form onSubmit={handleSubmit}>
                    <input type="text" id="username" className="inner-input" onChange={(e)=>{
                        setUsername(e.target.value)
                        console.log(username)
                    }} placeholder="Username"/>
                    <br/>
                    {username.length === 0 && <p className="error">This field is required</p>}
                    <input type="text" id="email" className="inner-input" onChange={(e)=>{
                        setEmail(e.target.value)
                        console.log(email)
                    }} placeholder="Email"/>
                    <br/>
                    {email.length === 0 && <p className="error">This field is required</p>}
                    <input type="text" id="password" className="inner-input" onChange={(e)=>{
                        setPassword(e.target.value)
                        console.log(password)
                    }} placeholder="Password"/>
                    <br/>
                    {password.length < 8 && <p className="error">Password must 8 characters or longer</p>}
                    <button className="inner-button" id="submit-button" disabled={!username || !email || password.length < 8 ? true: false}>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount;