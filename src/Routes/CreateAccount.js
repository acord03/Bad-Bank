import '../App.css'
import {useState, useContext} from 'react'
import {Submissions} from '../Submissions'
import {UserContext} from '../UserContext'

function CreateAccount(){
    const [userCreated, setUserCreated] = useState(false)
    const {submissions, setSubmissions} = useContext(Submissions)
    const {value, setValue} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(0)
    
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(userCreated === true){
            return alert(`User Already Created this session`)
        }        
        setUserCreated(true)

        let newAcc = {
            email: email,
            password: password,
            balance: 100
        }
        
        let newSubmission = submissions.concat(newAcc)
        setSubmissions(newSubmission)
        setValue(newAcc)
        alert('New Account Created')
    }
    
    return(
        <div>
            <div className="user-display">
                <h2>{value.email}</h2>
            </div>
            <div className="center-this">
                <div className="card">
                    <h1 className="card-header bg-dark">Account Creation</h1> 
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="email" className="inner-input" onChange={(e)=>{
                            setSelected2(true)
                            setEmail(e.target.value)
                            console.log(email)
                        }} placeholder="Email"/>
                        <br/>
                        {email.length === 0 && selected2 === true ? <p className="error">This field is required</p>: null}
                        <input type="text" id="password" className="inner-input" onChange={(e)=>{
                            let keyInputs = selected3
                            keyInputs++
                            setSelected3(keyInputs)
                            setPassword(e.target.value)
                            console.log(password)
                        }} placeholder="Password (8+ characters)"/>
                        <br/>
                        {password.length < 8 && selected3 >= 8 ? <p className="error">Password must 8 characters or longer</p>: null}
                        <button className="inner-button" id="submit-button" disabled={!email || password.length < 8 ? true: false}>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;