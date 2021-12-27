import { Groceryinput } from "./Groceryinput" 
import { Groceryitems } from "./Groceryitems"
import { useState } from "react";
import { nanoid } from "nanoid";

export const Grocery = ()=>{ 


    const [list, setlist] = useState([]);

    const handleClicked = (data)=>{
            console.log("DATA is in Parent",data) 
            const payload = {
                title : data,
                status : false,
                id : nanoid(4)
            }
            setlist([...list,payload]) 
    }  


const getDeleteData = (data)=>{
    console.log(data) 
console.log("Before : ",list)
    


var newArray = list.filter(function (el)
{
  return el.id !== data 
        
}
); 

// list = newArray
console.log(newArray); 
setlist(newArray) 
console.log("After : ",list)
 
}


    return <> 
    
    <Groceryinput getData = {handleClicked} />  
    {list.map((e) =>(
     <Groceryitems key={e.id} {...e} getDel={getDeleteData}/>
    ))}
    </>
}