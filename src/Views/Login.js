import React, { useEffect, useState } from "react";
import firebase from "firebase";
import {auth} from "../services/fire"
import {useAuthState} from 'react-firebase-hooks/auth'
import './Login.css'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [user] = useAuthState(auth);

  const signup = async()=>{
    const cred = await firebase.auth().createUserWithEmailAndPassword(username, password)
  }

  useEffect(()=> {
    console.log(user)
  }, [user])

  return (
   <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-3">
            
          </div>
          <div class="col-lg-5">
            <div className="container1" justifyContent='flex-end'>
            <h1 class="font-weight-light"><center>Login</center></h1>
      <fieldset>
         <label>
           <p> </p>
           <input style={{lineHeight:0.5, width:"450px"}} placeholder='Username' value={username} name="username"onChange={(e)=> setUsername(e.target.value)}/>
           <p> </p>
           <input style={{lineHeight:0.5, width:"450px"}} placeholder='Password' value={password} name="password" onChange={(e)=> setPassword(e.target.value)}/>
         </label>
       </fieldset>
       <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <button style={{backgroundColor: 'yellow', marginRight: '-5px', marginBottom: '300px'}} onClick={signup}>Login</button>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;