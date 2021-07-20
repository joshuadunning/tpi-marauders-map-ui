import React, { Component, useState } from 'react';
import Webcam from "react-webcam";


function WebcamCapture(props) {


    
    const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
    };

    
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        props.setImage(imageSrc)
        },

        [webcamRef]
    );

    

    return (
        <div className="webcam-container">
        
        <div className="webcam-img">
            {props.image==''?<Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={220}
            videoConstraints={videoConstraints}
            />:<img src={props.image}/>}
        </div>
        <button onClick={(e)=>{e.preventDefault();capture();}}> Capture</button>
        </div>
        );
    
};

export default WebcamCapture;
