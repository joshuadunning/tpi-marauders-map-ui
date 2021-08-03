import React, {useEffect, useState} from "react";
import Logo from '../assets/Technology_Partners_Logo.png'
import Space2 from '../assets/Space_2.jfif'
import Space4 from '../assets/pngtree-vector-lecturer-icon-png-image_956511.jpg'
import BreakRoom from '../assets/Break_Room.png'
import Door from '../assets/311-3110532_open-door-with-border-vector-door-icon-vector.png'
import Space1 from '../assets/401-4018684_transparent-hr-png-hr-icon-png-png-download.png'
import { db } from "../services/fire";
import UserEntity from "./UserEntity";

function Map() {

  const [users, setusers] = useState([]) 
  
  const wallClass = ()=>{
     return 'wall-default'
   }

   const getUsers = (space)=>{
     return users.filter((user)=>user.location==space)
   }

   useEffect(()=>{
      db.collection("users").onSnapshot((snapshot)=>{
        const arr = []
        console.log("1")
        snapshot.forEach((doc)=>{
          console.log(doc.data())
            arr.push(doc.data())
        })
        setusers(arr)
        console.log(users)
      })
   },[])

  return (
    <div className="map">
      <div>
          <div class="col-lg-3">
          <img src={Logo} style={{marginLeft: '-200px', marginBottom: '-100px'}}></img>
          </div>
      <div className="Top">
        <div className=" row">
          <div className={wallClass() + " col-lg-9"}  style={{ marginLeft:'-190px' , height: '375px', marginLeft: '7px', borderBottomWidth: '15px', marginTop: '-30px'}}>
          {/* Top left */}
          </div>
          <div className={wallClass() +' col-lg-3'} style={{ marginLeft: '1147px', marginTop:'-375px',  height: '190px'}}>
          <h1 style={{textAlign: 'left', fontSize: '20px', lineHeight: '1.0'}}>Space 5</h1>
          {getUsers(2).map(user=><UserEntity user={user}/>)}
          <img className="col-xl-1" src={Space2} style={{marginTop: '0px', maxHeight: '70%', maxWidth: '45%', opacity: '0.07', zIndex: 2, position: 'relative'}}></img>
          {/* Top Right */}
          </div>
          <div className={wallClass() + ' col-lg-3'} style={{ marginLeft: '1147px', marginTop:'-190px',  height: '190px', width:'400px'}}>
          <h1 style={{textAlign: 'left', fontSize: '20px', lineHeight: '1.0'}}>Space 4</h1>
          {getUsers(2).map(user=><UserEntity user={user}/>)}
          <img className="col-lg-5" src={Space4} style={{ maxHeight: '80%', maxWidth: '55%', opacity: '0.07', marginTop: '0px', zIndex: 2, position: 'relative'}}></img>
          {/* Middle Right */}
          </div>
        </div>
      </div>
      <div className="container">
      <div className="Bottom">
        <div className="row">
        <div className={wallClass() + " col-lg-9"}  style={{marginLeft:'-190px',  height: '390px', marginRight: '400px', borderBottomWidth: '15px', marginTop: '0px'}}>
          <h1 style={{textAlign: 'left', fontSize: '30px'}} >Space 2</h1>
          {getUsers(2).map(user=><UserEntity user={user}/>)}
          <img className="col-lg-8" src={Space2} style={{ padding: '30px', maxWidth: '50%', maxHeight: '90%', opacity: '0.07', marginTop: '0px', zIndex: 2, position: 'relative' }}></img>
          {/* Bottom Left */}
          </div>
          <div className={wallClass() + " col-xl-4"} style={{ marginLeft:'949px', width: '200px', height: '400px', marginRight: '400px', borderBottomWidth: '15px', marginTop: '-400px'}}>
          <h1 style={{textAlign: 'left', fontSize: '30px'}}>Space 1</h1>
          {getUsers(2).map(user=><UserEntity user={user}/>)}
          <img className="col-lg-9" src={Space1} style={{padding: '20px', marginTop: '50px', opacity: '0.07',zIndex: 2,position: 'relative'}}></img>
          {/* Bottom Right */}
          </div>
          <div className={wallClass() + " col-xl-3"} style={{ marginLeft:'664px',  height: '190px', marginRight: '400px', borderBottomWidth: '15px', marginTop: '-390px'}}>
          <h1 style={{textAlign: 'left', fontSize: '20px'}}>Break Room</h1>
          {getUsers(2).map(user=><UserEntity user={user}/>)}
          <img className="col-lg-8" src={BreakRoom} style={{maxHeight:'100%', maxWidth: '40%',padding: '0px', opacity: '0.07', marginTop: '0px', zIndex: 2, position: 'relative'}}></img>
          {/* Bottom Middle Top */}
          </div>
          <div className={wallClass() + " col-xl-3"} style={{ marginLeft:'664px', height: '220px', marginRight: '400px', borderBottomWidth: '15px', marginTop: '-220px'}}>
          <h1 style={{textAlign: 'left', fontSize: '20px', lineHeight: '2.0'}}>Lobby</h1>
          {getUsers(2).map(user=><UserEntity user={user}/>)}
          <img className="col-xl-12" src={Door} style={{marginTop: '0px', padding: '5px', maxHeight: '100%', maxWidth: '90%', opacity: '0.07', zIndex: 2, position: 'relative'}}></img>
          {/* Bottom Middle Bottom */}
          </div>
        </div>
      </div>
      </div>  
      </div>
    </div>
  );
}

export default Map;