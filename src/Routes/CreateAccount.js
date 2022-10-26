import '../App.css'
import {useState, useContext} from 'react'
import {Submissions} from '../Submissions'
import {UserContext} from '../UserContext'
import { SignedIn } from '../SignedIn'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'


function CreateAccount(){
    const {signedIn, setSignedIn} = useContext(SignedIn)
    const [userCreated, setUserCreated] = useState(false)
    const {submissions, setSubmissions} = useContext(Submissions)
    const {value, setValue} = useContext(UserContext)
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
        .then((userCredential)=>{
            setUserCreated(true)
            const user = userCredential.user
            setDoc(doc(db, "users", user.uid),{
                balance: 10
            })
            setValue(user)
            setSignedIn(true)
            alert('New Account Created')
        })
        .catch((error)=>{
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(`Error Code: ${errorCode} Error Message: ${errorMessage}`)
        })
        
        let newAcc = {email: email, password: password, balance: 10}
        let newSubmission = submissions.concat(newAcc)
        setSubmissions(newSubmission)
    }

    const provider = new GoogleAuthProvider()
    const createUserWithGoogle = async ()=>{
        signInWithPopup(auth, provider)
        .then((userCredential)=>{
            let user = userCredential.user;
            setDoc(doc(db, "users", user.uid),{
                balance: 10
            })
            setValue(user)
            setSignedIn(true)
            console.log(userCredential)
            alert('New Account Created')
        })
        .catch((error)=>{
            alert(error.message)
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
                        <button className="inner-button" id="submit-button" disabled={!email || password.length < 8 || passwordConf !== password || signedIn === true? true: false}>Create Account</button>
                    </form>
                    <p>OR</p>
                    <button className="inner-button" id="google-button" onClick={createUserWithGoogle} disabled={signedIn === true ? true : false}>Create Account with Google</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;