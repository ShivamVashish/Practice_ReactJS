import React, {useState} from "react";
import ReactDOM from "react-dom/client"

 
 function Counter(){
const [count,setcount] = useState(0)
  function increment(){
    setcount(count+1)
  }
  function Decrement(){
    setcount(count-1)
  }

    // ek yha or krta hu ek whi pe krta hu
    // call back funciton lena hota h (ab onclick ke andr bhi kr skte h isko )
    return(
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Count is : <span className="text-blue-400">{count}</span></h1>
        <div className="flex gap-4 justify-center">
          <button onClick={increment} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">Increment</button>
          <button onClick={Decrement} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">Decrement</button>
          
        </div>
      </div>
    </div>
    )
 }

const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<Counter/>)