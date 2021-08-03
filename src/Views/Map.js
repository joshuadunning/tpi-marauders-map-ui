import React, {useEffect, useState} from "react";
import Logo from '../assets/Technology_Partners_Logo.png'
import Space2 from '../assets/Space_2.jfif'
import Space4 from '../assets/pngtree-vector-lecturer-icon-png-image_956511.jpg'
import BreakRoom from '../assets/Break_Room.png'
import Door from '../assets/311-3110532_open-door-with-border-vector-door-icon-vector.png'
import Space1 from '../assets/401-4018684_transparent-hr-png-hr-icon-png-png-download.png'
import SGLogo from '../assets/SGLogo.png'
import { db } from "../services/fire";
import UserEntity from "./UserEntity";

function Map() {

  const [users, setusers] = useState([]) 
  const [theme, setTheme] = useState('default')
  
  const wallClass = ()=>{
     return 'wall-' + theme
   }

   const roomNameClass = ()=>{
     return `room-name room-name-` + theme
   }

   const getUsers = (space)=>{
     return users.filter((user)=>user.location==space)
   }

   const getLogo = ()=>{
    return theme === 'default' ? Logo : SGLogo
   }

   const getBG = () => {
     return theme === 'hp' ? 'hp': ''
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
    <div className={'map'} id='map'>
      <div className={getBG()} />
      <img src={getLogo()} style={{position: 'fixed', top: '80px', left: '40px', maxHeight: '200px'}}></img>
      <div className="Top row">
        <div className={wallClass() + ' col-8 topleft'}>
          <select style={{float:'right'}} onChange={(e)=> setTheme(e.target.value)}>
            <option value='default'>Default</option>
            <option value='hp'>Marauders Map</option>
          </select>
        </div>
        <div className='TopRight col-4 '>
          <div className={wallClass() + ' space-5 row'}>
            <h1 className={roomNameClass()}>Space 5</h1>
            {theme == 'default' ? <img className="room-image" src={Space2} />: ''}
            {getUsers(5).map(user=><UserEntity user={user}/>)}
          </div>
          <div className={wallClass() + ' space-4 row'}>
            <h1 className={roomNameClass()}>Space 4</h1>
            {theme == 'default' ? <img className="room-image" src={Space4} />: ''}
            {getUsers(4).map(user=><UserEntity user={user}/>)}
          </div>
        </div>
      </div>
      <div className='Bottom row'>
        <div className={wallClass() + ' space-2 col-6'}>
          <div className='row'>
            <h1 className={roomNameClass()}>Space 2</h1>
            {theme == 'default' ? <img className="room-image" src={Space2} />: ''}
            {getUsers(2).map(user=><UserEntity user={user}/>)}

          </div>
        </div>
        <div className='col-2'>
          <div className={wallClass() + " row breakroom"}>
          <h1 className={roomNameClass()}>Break Room</h1>
          {theme == 'default' ? <img className="room-image-lobby" src={BreakRoom} />: ''}
          {getUsers(3).map(user=><UserEntity user={user}/>)}
          </div>
          <div className={wallClass() + " row lobby"}>
          <h1 className={roomNameClass()}>Lobby</h1>
          {theme == 'default' ? <img className="room-image-lobby" src={Door} />: ''}
          {getUsers(6).map(user=><UserEntity user={user}/>)}
          </div>
        </div>
        <div className={wallClass() + ' space-1 col-4'}>
          <div className='row'>
            <h1 className={roomNameClass()}>Space 1</h1>
            {theme == 'default' ? <img className="room-image-1" src={Space1} />: ''}
            {getUsers(1).map(user=><UserEntity user={user}/>)}
          </div>
        </div>
      </div>
  
      </div>
  );
}

export default Map;