import { useState } from "react"
import "./testing.css"

export default function Testing() {

    const [name,setName] = useState("Student")

    const [count,setCount] = useState(0)

    function increment() {
        console.log("incrementing")
        setCount(count+1) 
    }

    function decrement() {
        console.log("Decrementing")
        setCount(count-1)  
    }
    function changeName(value) {
        setName(value)
    }

    

    return(
        <div className="background">

            <h1>{name}</h1>
            <button className="val" onClick={decrement} >-</button>
            <span>{count}</span>
            <button className="val" onClick={increment}>+</button>

            <div className="button-panel">
                <button onClick={()=>changeName("Students")}>Students</button>
                <button onClick={()=>changeName("Teachers")}>Teachers</button>
                <button onClick={()=>changeName("Admins")}>Admins</button>
            </div>

        </div>

    )
}

