import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  let money  = useRef(0)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-80 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter App</h2>
        <h1 className="text-5xl font-extrabold text-purple-600 mb-6">{count}</h1>
        <div className="flex gap-4">
          <button onClick={() => setCount(count - 1)} className="flex-1 bg-red-500 hover:bg-red-600 text-white text-2xl font-bold py-2 rounded-lg transition">-</button>
          <button onClick={() => setCount(count + 1)} className="flex-1 bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-2 rounded-lg transition">+</button>
          <h1>Money : {money.current}</h1>
          <button onClick={()=>{money.current = money.current + 1
            console.log(money);
          }}>Increment</button>
        </div>
      </div>
    </div>
  );
}
const Root = ReactDOM.createRoot(document.querySelector("#root"));
Root.render(<App />);
