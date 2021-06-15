import { useState } from "react"


function Home (){

    let [count, setCount] = useState(0)

    const handleClick = ()=>{
        setCount(count + 1)
    }
    
//Arnav
    return (
        <>
            <div>Count {count}</div>
            <button onClick={handleClick} >+ 1</button>
        </>
    )
}



export default Home