import React,{useState} from "react"
import Child from "./Child"

const Parent = ()=>{

    const[value, setValue] = useState("")


    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{value}</p>
            <Child setValue={setValue} />
        </div>
    )
}
export default Parent