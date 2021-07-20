import React, {useState} from 'react';
import  WebcamCapture  from './WebcamCapture.js';

function Create() {

  const [image, setImage] = useState('');

  return (
    <div className="create">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-3">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Create</h1>
            <fieldset>
                <label> 
                  <WebcamCapture image={image} setImage={setImage}/>
                  <p> </p>
                  <input style={{lineHeight:0.5, width:"250px", marginLeft:'250px'}} placeholder='First Name'/>
                  <p> </p>
                  <input style={{lineHeight:0.5, width:"250px", marginLeft:'250px'}} placeholder='Last Name'/>
                  <p> </p>
                  <input style={{lineHeight:0.5, width:"250px", marginLeft:'250px'}} placeholder='Email'/>
                </label>
            </fieldset>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <button style={{backgroundColor: 'yellow', marginRight: '-55px', marginBottom: '300px'}}>Register</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <button style={{backgroundColor:'lightgray', marginRight: '45px', marginBottom:'400px', marginTop:'-330px'}}>Take Photo</button>
            </div>

            </div>
          </div>
        </div>
      </div>
      );
     
  };


export default Create;