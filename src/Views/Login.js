import React, { useEffect, useState } from "react";
import firebase from "firebase";
import {auth} from "../services/fire"
import {useAuthState} from 'react-firebase-hooks/auth'
import './Login.css'
import Logo from '../assets/Technology_Partners_Logo.png'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [user] = useAuthState(auth);

  const signin = async()=>{
    const cred = await firebase.auth().signInWithEmailAndPassword(email, password)
  }

  useEffect(()=> {
    console.log(user)
  }, [user])

  return (
   <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-3">
          <img src={Logo} style={{position: 'fixed', top: '80px', right: '40px'}}></img>
          </div>
          <div class="col-lg-5">
            <div className="container1" justifyContent='flex-end'>
            <h1 class="font-weight-light"><center>Login</center></h1>
            
      <fieldset>
         <label>
           <p> </p>
           <input style={{lineHeight:0.5, width:"450px"}} placeholder='Email' value={email} name="email" onChange={(e)=> setEmail(e.target.value)}/>
           <p> </p>
           <input style={{lineHeight:0.5, width:"450px"}} placeholder='Password' value={password} name="password" onChange={(e)=> setPassword(e.target.value)}/>
         </label>
        
       </fieldset>
       <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <button style={{backgroundColor: '#FFC500', marginRight: '-5px', marginBottom: '300px'}} onClick={signin}>Login</button>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;