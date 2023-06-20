import React from "react";

const Child = ({setValue})=>{

    return(
        <div className="child">
            <h2>Child Component</h2>
            <input type="text" onChange={(e)=> setValue(e.target.value)} />
        </div>
    )
}
export default Child