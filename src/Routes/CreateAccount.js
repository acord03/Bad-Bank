import '../App.css'
import {useState, useContext} from 'react'
import {Submissions} from '../Submissions'
import {UserContext} from '../UserContext'
import { SignedIn } from '../SignedIn'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function CreateAccount(){
    const {signedIn} = useContext(SignedIn)
    const [userCreated, setUserCreated] = useState(false)
    const {submissions, setSubmissions} = useContext(Submissions)
    const {value} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')
    const [selected1, setSelected1] = useState(0)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(0)
    
    
    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(signedIn === true){
            return alert(`You're already signed in.`)
        }
        if(userCreated === true){
            return alert(`User Already Created this session.`)
        }        
        

        createUserWithEmailAndPassword(auth, email, password)
        .then((UserCredential)=>{
            setUserCreated(true)
            const user = UserCredential.user
            console.log(user)
            alert('New Account Created')
        })
        .catch((error)=>{
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(`Error Code: ${errorCode} Error Message: ${errorMessage}`)
        })
        
        let newAcc = {email: email, password: password, balance:500}
        let newSubmission = submissions.concat(newAcc)
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
                    <h1 className="card-header bg-dark">Create Account</h1> 
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
                        {password.length < 8 && selected3 >= 8 ? <p className="error">Password must be 8 characters or longer</p>: null}
                        <input type="text" id="password-conf" className="inner-input" onChange={(e)=>{
                            let keyInputs = selected1;
                            keyInputs++
                            setSelected1(keyInputs)
                            setPasswordConf(e.target.value)
                        }} placeholder="Confirm Password"/>
                        <br/>
                        {password !== passwordConf && selected1 >= 8 ? <p className='error'>Passwords must match</p>: null}
                        <button className="inner-button" id="submit-button" disabled={!email || password.length < 8 || passwordConf !== password? true: false}>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;