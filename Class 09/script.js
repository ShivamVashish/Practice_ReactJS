import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Passwordgenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(5);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

 const generatepassowrd =  useCallback(()=>{
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(numbers){
            str+= '0123456789'
            if(characters){
                str+='@&^%#~`{?>/>}|'
            }
        }
        let pass = ""
        for(let i = 0;i<length;i++){
            pass+= str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass)
  },[length,numbers,characters])
   useEffect(()=>{
    generatepassowrd()
   },[generatepassowrd])
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Password Generator</h1>
        <div className="mb-6 p-4 bg-gray-800 rounded-lg text-center text-xl font-mono tracking-wide"> 
          <span className="text-yellow-400">{password}</span>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold">Length: {length}</label>
    <input type="range"min={5}max={30}value={length}onChange={(e) =>setLength(e.target.value)}className="w-full h-2 rounded-lg accent-yellow-400 cursor-pointer"/>
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
    <input type="checkbox"checked={numbers}onChange={() => setNumbers(!numbers)}className="w-5 h-5 accent-yellow-400"/>
              <span className="text-sm font-medium">Numbers</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox"checked={characters}onChange={() => setCharacters(!characters)}className="w-5 h-5 accent-yellow-400"/>
              <span className="text-sm font-medium">Special Characters</span>
            </label>
          </div>
          <button className="w-full py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition duration-300" onClick={generatepassowrd}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}
const Root = ReactDOM.createRoot(document.querySelector("#root"));
Root.render(<Passwordgenerator />);
