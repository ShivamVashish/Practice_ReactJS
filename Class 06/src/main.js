import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./utils/dummy";

// console.log(arr);
function App() {
  const [data,setdata] = useState(arr)
  function sortArray(){
    const sorted = [...data].sort((a,b)=>a.price-b.price)
    setdata(sorted)
  }
  function priceabove500(){
   const B =  arr.filter((value)=>value.price>1009)
   setdata(B)
  }
 return (
   <div>
     <Header />
     <button className="bg-black p-1 text-white font-bold" onClick={sortArray}>Sort By Price</button>
     <button className="bg-black p-1 text-white font-bold" onClick={priceabove500}>Price Above 499</button>
     {data.map((value, index) => (
       <Card key={index}
         cloth={value.cloth}
         Offer={value.Offer}
         img={value.img}
         price={value.price}
       />
     ))}

     <Footer />
   </div>
 );
}
const Root = ReactDOM.createRoot(document.querySelector("#root"));
Root.render(<App />);
