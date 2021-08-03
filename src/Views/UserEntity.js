import React from 'react'
import Hat1 from '../assets/image (1).png'
import Hat2 from '../assets/image.png'

function UserEntity({user, hat}) {
    return(
        <div className="d-flex flex-column userPadding" key={user.email}>
            <img src={hat} className="christmas"></img>
            <img src={user.image} 
            alt={user.firstName} 
            style={{borderRadius: '50px', height: '55px', zIndex: 1, position: 'relative'}} />
            <span>{user.firstName}</span>
        </div>
    )
}

export default UserEntity