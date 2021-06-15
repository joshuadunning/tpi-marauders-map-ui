import { useState } from "react"


function Home (){

    // Comment
    let [count, setCount] = useState(0)

    const handleClick1 = ()=>{
        setCount(count + 1)
    }

    return (
        <>
            <div>Count {count}</div>
            <button onClick={handleClick1} >+ 1</button>
        </>
    )
}

export default Home