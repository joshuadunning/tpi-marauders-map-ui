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
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-3">
          <img src={Logo} style={{marginLeft: '1135px', marginBottom: '550px'}}></img>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Sign Up</h1>
            <fieldset>
                <label> 
                  <WebcamCapture image={image} setImage={setImage} />
                  <p> </p>
                   <input style={{lineHeight:0.5, width:"250px", marginLeft:'250px'}} placeholder='First Name' value={firstName} name="firstname" onChange={(e)=> setFirstName(e.target.value)}/>
                  <p> </p>
                  <input style={{lineHeight:0.5, width:"250px", marginLeft:'250px'}} placeholder='Last Name' value={lastName} name="lastname" onChange={(e)=> setLastName(e.target.value)}/> 
                  <p> </p>
                  <input style={{lineHeight:0.5, width:"250px", marginLeft:'250px'}} placeholder='Email' value={email} name="email"onChange={(e)=> setEmail(e.target.value)}/>
                  
                </label>
            </fieldset>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <button style={{backgroundColor: 'yellow', marginRight: '-55px', marginBottom: '300px'}} onClick={setUserEntry}>Register</button>
            </div>

            </div>
          </div>
        </div>
      </div>
      );
     
  };


export default Create;