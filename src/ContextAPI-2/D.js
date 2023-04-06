import { useContext } from "react"
import context from "./Context"
function D(){
    const data=useContext(context)
    return (
        <div>
            <h2>D Component</h2>
            <p style={{fontStyle:"italic"}}>Data from A: <span style={{color:"green"}}>{data}</span></p>
        </div>
    )
}

export default D