import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if (intervalRef.current) return; 
    intervalRef.current = setInterval(() => {
      setTime(prev=>prev + 1);
    }, 1000);
  }
  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  function reset() {
    stop();
    setTime(0);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stopwatch</h2>
        <div className="text-5xl font-extrabold text-indigo-600 mb-6">{time}s</div>
        <div className="flex gap-3">
          <button onClick={start}className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition">Start</button>
          <button onClick={stop}className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition">Stop</button>
          <button onClick={reset}className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition">Reset</button>
        </div>
      </div>
    </div>
  );
}
const Root = ReactDOM.createRoot(document.querySelector("#root"));
Root.render(<Stopwatch />);
