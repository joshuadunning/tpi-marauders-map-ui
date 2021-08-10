import React, { useState } from 'react'
import Christmas from '../assets/image (1).png'
import Halloween from '../assets/image.png'
import newYear from '../assets/New_Year.png'
import Patricks from '../assets/St_Patricks.png'
import Easter from '../assets/Easter.png'
import Soldier from '../assets/Soldier.png'
import Independence from '../assets/July_4.png'
import Fall from '../assets/Fall.png'
import Thanksgiving from '../assets/Thanksgiving.png'
import Summer from '../assets/Summer.png'


function UserEntity({user, hat}) {
    
    const gethat = () => {
        var imageArray = [newYear, null, Patricks, Easter, Soldier, Summer, Independence, null, Fall, Halloween, Thanksgiving, Christmas]

        var newMonth = new Date(); //create a new date object
        var Month = newMonth.getMonth(); //gets the time in seconds

        return imageArray[Month]
    }

    return (
        <div className="d-flex flex-column userPadding" key={user.email}>
            {
            gethat()?
            <img id="hat" src={gethat()} className="style1" style={{transform: `rotate(${Math.random() * 30}deg)`}}></img>:null}
            <img src={user.image} 
            alt={user.firstName} 
            style={{borderRadius: '50px', height: '55px', zIndex: 1, position: 'relative'}} />
            <span>{user.firstName}</span>
        </div>
    )

    //     function displayImage() {
        
    //         console.log("1")
    //         var myHat = document.getElementById("hat");
    //         var imageArray = ["../assets/image (1).png", "../assets/image.png"];
    //         var imageIndex = 0;
    //         var changeImage = function() {
    //             hat.setAttribute("src", imageArray[imageIndex]);
    //             imageIndex++;
    //             if (imageIndex >= imageArray.length) {
    //                 imageIndex = 0;
    //             }
    //         }
        
    //         var newSeconds = new Date(); //create a new date object
    //         var daySeconds = newSeconds.getSeconds(); //gets the time in seconds
        
    //         if (daySeconds >= 0 && daySeconds <= 30) {
    //         hat.setAttribute("src", imageArray[0]);
    //         } 
    //         else if (daySeconds >= 31 && daySeconds <= 59) {
    //         hat.setAttribute("src", imageArray[1]);
    //         } 
    //         else {
    //         var intervalHandle = setInterval(changeImage, 3000);
    //         }
    //         myHat.onclick = function() {
    //         clearInterval(intervalHandle);
    //     };
    // }
    // displayImage();
}

export default UserEntity