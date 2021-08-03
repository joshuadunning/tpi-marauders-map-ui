import React, {useState, useEffect} from 'react';
import  WebcamCapture  from './WebcamCapture.js';
import firebase from "firebase";
import {auth, db} from "../services/fire"
import {useAuthState} from 'react-firebase-hooks/auth';
import Logo from '../assets/Technology_Partners_Logo.png'


function Create() {

  const [image, setImage] = useState('');

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [user] = useAuthState(auth);

  const setUserEntry = () => {
    
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        image: image
    }
    db.collection('users').doc(user.uid).set(user, {merge: true})
}
  
  useEffect(()=> {
    console.log(user)
  }, [user])

  return (
    <div className="create">
        <h1 className="font-weight-light" style={{marginTop: '50px'}}>Sign Up</h1>
        <img src={Logo} style={{position: 'fixed', top: '80px', right: '40px'}}></img>
        <div className='d-flex justify-content-center' style={{marginTop:'5%'}}>
              <div className='col-lg-2'>
                <WebcamCapture image={image} setImage={setImage} />
              </div>  
              <div className='col-lg-2 ml-4 d-flex flex-column align-self-center'>
                <input style={{lineHeight:0.5, marginBottom: '5px'}} placeholder='First Name' value={firstName} name="firstname" onChange={(e)=> setFirstName(e.target.value)}/>
                <input style={{lineHeight:0.5, marginBottom: '5px'}} placeholder='Last Name' value={lastName} name="lastname" onChange={(e)=> setLastName(e.target.value)}/> 
                <input style={{lineHeight:0.5, marginBottom: '5px'}} placeholder='Email' value={email} name="email"onChange={(e)=> setEmail(e.target.value)}/>
                <button style={{marginLeft: 'auto', width:"100px", backgroundColor: '#FFC500', border: '1px solid grey', borderRadius: '3px'}} onClick={setUserEntry}>Register</button>
              </div>
        </div>
    </div>
      );
     
  };


export default Create;