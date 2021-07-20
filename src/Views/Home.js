import { useState } from "react"



function Home (){

    let [url, seturl] = useState(0)


    const handleClick = ()=>{
       
        
        fetch("https://dog.ceo/api/breeds/image/random/4").then(response=>{
        response.json().then(data=> {
            console.log(data);
           
            seturl(data.message);
        });
            }).catch(function(error) {
             console.log('Fetch Error:', error);
    });
    }

    
    
//Arnav
    return (
        <>
          
          {url && url.map(url =>
                        <center><img src={url} alt="" /></center>
                    )}
        
            <button onClick={handleClick} >+ 1</button>
        </>
    )
}



export default Home