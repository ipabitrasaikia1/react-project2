
import { useState } from "react";

export const Groceryinput = ({getData})=>{

   

    const [text, settext] = useState("");

    const handleChange = (e)=>{

        // console.log(e.target.value)
        settext(e.target.value) ;
    } 

    const handleClick  = ()=>{

        // console.log(text)
        getData(text)
    } 

    return <> 

<input type="text" placeholder="Enyter text" onChange={handleChange} />
<button onClick={handleClick} >Add item</button>
    </>
}