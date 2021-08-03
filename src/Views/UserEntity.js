import React from 'react'

function UserEntity({user}) {
    return(
        <div key={user.email}>
            <img src={user.image} 
            alt={user.firstName} 
            style={{borderRadius: '50px', height: '55px', zIndex: 1, position: 'absolute'}} />
        </div>
    )
}

export default UserEntity