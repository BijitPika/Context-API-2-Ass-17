import B from "./B"
import context from "./Context"
import { useState } from "react"

function A(){
    const [state,setState]=useState("")
    const [data,setData]=useState("")
    return (
        <div>
            <h2>A Component</h2>
            <input type="text" placeholder="Enter some text" onChange={(e)=>{setState(e.target.value)}} ></input>
            <button onClick={()=>{setData(state)}}>Send Data</button>
            <hr></hr>
            <context.Provider value={data}>
                 <B/>
            </context.Provider>
            
        </div>
    )
}

export default A