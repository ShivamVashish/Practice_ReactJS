import React,{useState,useEffect} from "react";
function Colorful(){
    const [Color,setColor] = useState('black')

    useEffect(()=>{
            document.body.style.backgroundColor = Color;
    },[Color])
    
    return(
        <>
        <h1 className="font-bold text-3xl flex justify-center items-center text-white mt-20">Background Changer</h1>
        <div className="flex gap-4 justify-center items-center mt-20">
            <button className="border-2 text-2xl border-black font-bold px-2 bg-red-700 text-white" onClick={()=>setColor("red")}>Red</button>
            <button  className="border-2 text-2xl border-black font-bold px-2 bg-blue-700 text-white"onClick={()=>setColor('blue')}>Blue</button>
            <button className="border-2 text-2xl border-black font-bold px-2 bg-green-700 text-white"onClick={()=>setColor('green')}>Green</button>;
            <button className="border-2 text-2xl border-black font-bold px-2 bg-yellow-700 text-white"onClick={()=>setColor('yellow')}>Yellow</button>
            <button  className="border-2 text-2xl border-black font-bold px-2 bg-pink-700 text-white"onClick={()=>setColor('pink')}>Pink</button>
        </div>
        </>
    )
}

export default Colorful