import { createContext, useState } from "react";
let countContext =createContext()

export default function countContextProvider(props){

const[counter,setcounter] = useState(0)

function changecount(){
    setcounter(Math.round())
}

return<countContext.Provider value={{counter,changecount}}>
    {props.children}
</countContext.Provider>    
}   