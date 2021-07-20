import React, { useState } from 'react';
import axios from 'axios'

function App() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const login = () => {
        axios.get(
            `http://localhost:8086/login/authenticate/${username}/${password}`
        ).then(resp=>console.log(resp))
    }



  
    return(
    <div className="container">
      <fieldset>
         <label>
           <p>Userame</p>
           <input value={username} name="username"onChange={(e)=> setUsername(e.target.value)}/>
           <p>Password</p>
           <input value={password} name="password" onChange={(e)=> setPassword(e.target.value)}/>
         </label>
       </fieldset>
       <button onClick={login}>Submit</button>
    </div>
  )
}

export default App