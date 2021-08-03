import React, {useEffect, useState} from "react";
import Logo from '../assets/Technology_Partners_Logo.png'
import Space2 from '../assets/Space_2.jfif'
import Space4 from '../assets/pngtree-vector-lecturer-icon-png-image_956511.jpg'
import BreakRoom from '../assets/Break_Room.png'
import Door from '../assets/311-3110532_open-door-with-border-vector-door-icon-vector.png'
import Space1 from '../assets/401-4018684_transparent-hr-png-hr-icon-png-png-download.png'
import { db } from "../services/fire";

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
      <img src={Logo} style={{position: 'fixed', top: '80px', left: '40px'}}></img>
      <div className="Top row">
        <div className={wallClass() + ' col-8 topleft'}>

        </div>
        <div className='TopRight col-4 '>
          <div className={wallClass() + ' space-5 row'}>
            <h1 className='room-name'>Space 5</h1>
            <img className="room-image" src={Space2}></img>

          </div>
          <div className={wallClass() + ' space-4 row'}>
            <h1 className='room-name'>Space 4</h1>
            <img src={Space4} className={'room-image'}></img>

          </div>
        </div>
      </div>
      <div className='Bottom row'>
        <div className={wallClass() + ' space-2 col-6'}>
          <div className='row'>
            <h1 className='room-name'>Space 2</h1>
            <img className="room-image" src={Space2}></img>

          </div>
        </div>
        <div className='col-2'>
          <div className={wallClass() + " row breakroom"}>
          <h1 className='room-name'>Break Room</h1>
          <img className="room-image-lobby" src={BreakRoom}></img>

          </div>
          <div className={wallClass() + " row lobby"}>
          <h1 className='room-name'>Lobby</h1>
          <img className="room-image-lobby" src={Door}></img>

          </div>
        </div>
        <div className={wallClass() + ' space-1 col-4'}>
          <div className='row'>
            <h1 className='room-name'>Space 1</h1>
            <img className="room-image-1" src={Space1}></img>

          </div>
        </div>
      </div>
  
      </div>
  );
}

export default Map;