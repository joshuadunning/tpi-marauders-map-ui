import React, { useEffect } from 'react';
import Webcam from "react-webcam";


function WebcamCapture({image, setImage}) {
    
    const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
    };

    const webcamRef = React.useRef(null);

    const capture = React.useCallback (
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
            if(imageSrc){
                setImage(imageSrc)
            }
        },

        [webcamRef, setImage]
    );

    useEffect(()=>{
        console.log(image)
    },[image])


    return (
        <div className="webcam-container">
        <div className="webcam-img">
            {image.length==0?<Webcam
            style={{marginRight: '250px', marginBottom: '-191px'}}
            audio={false}
            height={190}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={220}
            videoConstraints={videoConstraints}
            />:<img src={image} alt='hi'/>}
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button style={{marginRight: '100px', marginBottom: '5px'}} onClick={(e)=>{e.preventDefault();capture();}}> Take Photo</button>
        </div>
        <div>
            {image!=''?
            <button onClick={(e)=>
            {
            e.preventDefault();
            setImage('')
            }}
            className="webcam-btn">
            Retake Image</button>:
            <button onClick={(e)=>{
            e.preventDefault();
            capture();
            }}
            className="webcam-btn"></button>
            }
        </div>
        </div>
        );
};

export default WebcamCapture;