import '../App.css'
import {useState, useContext} from 'react'
import {UserContext} from '../UserContext'
import { SignedIn } from '../SignedIn'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login(){
    const {signedIn, setSignedIn} = useContext(SignedIn)
    const {value, setValue} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(0)
    
    
    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(signedIn === true){
            return alert(`You're already signed in.`)
        }
        signInWithEmailAndPassword(auth, email, password)
        .then((UserCredential)=>{
            const user = UserCredential.user
            const username = user.email
            setValue(username)
            console.log(user)
            setSignedIn(true)
            alert('Sign In successful')
        })
        .catch((error)=>{
            let errorCode = error.code;
            let errorMessage = error.message;

            console.log(`error code: ${errorCode}, error message:${errorMessage}`)
        })
        
        
    }

    const handleLogout = ()=>{
        setSignedIn(false)
        alert('Logged out')
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
                    <h1 className="card-header bg-dark">Login</h1> 
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
                        }} placeholder="Password"/>
                        <br/>
                        {password.length < 8 && selected3 >= 8 ? <p className="error">Password must be 8 characters or longer</p>: null}
                        <button className="inner-button" id="submit-button" disabled={!email || password.length < 8 ? true: false}>Login</button> 
                    </form>
                    <button className="inner-button" id="logout-button" disabled={signedIn === false ? true: false} onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Login;