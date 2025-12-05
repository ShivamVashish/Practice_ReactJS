import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client"
import Colorful from "./Component/Colorful";
// Background Changeer
function Main(){
    const [count,setcount] = useState(0)
    return(
        <>
        <h1 className="bg-black text-white">Counter is : {count}</h1>
        <button onClick={()=>setcount(count+1)} className="text-white">Increment</button>
        
    <Colorful/>
        </>
    )
    
}



const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<Main/>)