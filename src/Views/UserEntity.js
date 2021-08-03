import React from 'react'

function UserEntity({user}) {
    return(
        <div className="d-flex flex-column userPadding" key={user.email}>
            <img src={user.image} 
            alt={user.firstName} 
            style={{borderRadius: '50px', height: '55px', zIndex: 1}} />
            <span>{user.firstName}</span>
        </div>
    )
}

export default UserEntity