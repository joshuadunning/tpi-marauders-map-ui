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
import Christmas from '../assets/image (1).png'
import Halloween from '../assets/image.png'
import {BsMap} from 'react-icons/bs'


function Map() {

  const [users, setusers] = useState([]) 
  const [theme, setTheme] = useState('default')
  const [hat, setHat] = useState(null)

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

  //  const themePickerBg = () => {
  //    return theme === 'hp' ? 'theme-picker-hp' : ''
  //  }

      const toggleTheme = () => {
        return theme === 'hp' ? setTheme('default') : setTheme('hp')
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
          {/* <label className={toggleTheme()} style={{float: 'right', position: 'relative', display: 'inline-block', width: '60px', height: '34px'}} >     
            <input type="checkbox" className="checkbox"/>
            <span className="slider round"></span>
          </label> */}
          
          <BsMap className={'map-icon'} onClick={(e)=> toggleTheme()} /> 
          
          {/* <select className={themePickerBg()} style={{float:'right'}} onChange={(e)=> setTheme(e.target.value)}>
            <option value='default'>Default</option>
            <option value='hp'>Marauders Map</option>
          </select> */}
          {/* <select className={themePickerBg()} style={{float:'right'}} onChange={(e)=> setHat(e.target.value)}>
            <option value={Christmas} >Christmas</option>
            <option value={Halloween}>Halloween</option>
          </select> */}
        </div>
        <div className='TopRight col-4 '>
          <div className={wallClass() + ' space-5 row'}>
            <h1 className={roomNameClass()}>Space 5</h1>
            {theme == 'default' ? <img className="room-image" src={Space2} />: ''}
            {getUsers(5).map(user=><UserEntity hat={hat} user={user} />)}
          </div>
          <div className={wallClass() + ' space-4 row'}>
            <h1 className={roomNameClass()}>Space 4</h1>
            {theme == 'default' ? <img className="room-image" src={Space4} />: ''}
            {getUsers(4).map(user=><UserEntity hat={hat} user={user} />)}
          </div>
        </div>
      </div>
      <div className='Bottom row'>
        <div className={wallClass() + ' space-2 col-6'}>
          <div className='row'>
            <h1 className={roomNameClass()}>Space 2</h1>
            {theme == 'default' ? <img className="room-image" src={Space2} />: ''}
            {getUsers(2).map(user=><UserEntity hat={hat} user={user}/>)}

          </div>
        </div>
        <div className='col-2'>
          <div className={wallClass() + " row breakroom"}>
          <h1 className={roomNameClass()}>Break Room</h1>
          {theme == 'default' ? <img className="room-image-lobby" src={BreakRoom} />: ''}
          {getUsers(3).map(user=><UserEntity hat={hat} user={user}/>)}
          </div>
          <div className={wallClass() + " row lobby"}>
          <h1 className={roomNameClass()}>Lobby</h1>
          {theme == 'default' ? <img className="room-image-lobby" src={Door} />: ''}
          {getUsers(6).map(user=><UserEntity hat={hat} user={user}/>)}
          </div>
        </div>
        <div className={wallClass() + ' space-1 col-4'}>
          <div className='row'>
            <h1 className={roomNameClass()}>Space 1</h1>
            {theme == 'default' ? <img className="room-image-1" src={Space1} />: ''}
            {getUsers(1).map(user=><UserEntity hat={hat} user={user}/>)}
          </div>
        </div>
      </div>
  
      </div>
  );
}

export default Map;