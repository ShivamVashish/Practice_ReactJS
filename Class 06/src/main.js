import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./utils/dummy";

// console.log(arr);
function App() {
 let [Data,setData] = useState(arr)
  function sortarrray(){
    let sorted = [...Data].sort((a,b)=>a.price-b.price);
    setData(sorted)
  }
  function filter(){
   let filtering =  arr.filter(item=>item.price>700)
   setData(filtering)
  }
 return (
   <div>
     <Header />
     <button className="bg-black p-1 text-white font-bold" onClick={sortarrray}>Sort By Price</button>
     <button className="bg-black p-1 text-white font-bold" onClick={filter}>Price Above 499</button>
     {Data.map((value, index) => (
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
