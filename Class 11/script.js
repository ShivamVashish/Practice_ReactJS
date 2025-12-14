import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

// 0 1 1 2 3 5 8 13 21 34

function App() {
  // Counter
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function fibonaci(n) {
    // n = Number(n); 
    if (n <= 1) return n;
    return fibonaci(n - 1) + fibonaci(n - 2); // isme hm callback ka bhi use kr skte h or isko bhr globaly bhi bna skte h 
  }
  const result = useMemo(()=>{
return fibonaci(number)
  },[number])   // handle empty input
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-10 p-5 text-white">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">{count}</h1>
        <div className="flex gap-4">
          <button onClick={() => setCount(count + 1)}className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-bold transition">Increment
          </button>
          <button onClick={() => setCount(count - 1)}className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-bold transition">Decrement
          </button>
        </div>
        {/* Fibonacci Section */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 w-full max-w-sm">
          <h2 className="text-2xl font-semibold">Fibonacci Number is : {result}</h2>
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="w-full p-2 rounded-md text-black font-medium" placeholder="Enter a number"/>
        </div>
      </div>
    </div>
  );
}

const Root = ReactDOM.createRoot(document.querySelector("#root"));
Root.render(<App />);
