import React from "react";
import ReactDOM from "react-dom/client"

// Header
// Main
// Footer
function Header(){
    return(
        <header className="bg-gray-700 p-8 text-2xl font-bold text-white fixed right-0 left-0">
            <img src={"./"} alt="" />
            <nav>
                <ul className="flex justify-end gap-10">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Card(props){
    return(
      
        <div className="bg-blue-900 text-white flex justify-around m-10 items-center inline-block m-5 border-5 rounded-xl mt-30">
            <img className="h-[300px] w-[220px] rounded-xl" src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div>
                <h2 className="text-center font-bold">{props.cloth}</h2>
                <h1 className="text-center font-bold">{props.offer}</h1>
                <h2 className="text-center font-bold">Shop Now</h2>
            </div>
        </div>
    )
}

const arrCard = [{cloth:'T-shirt',Offer:"20-80% OFF"},{cloth:'Jeans',Offer:"30-80% OFF"},{cloth:'Pants',Offer:"40-60% OFF"},{cloth:'Kurta',Offer:"10-80% OFF"},{cloth:'Pajama',Offer:"50-80% OFFF"},{cloth:'Shoes',Offer:"20-30% OFF"},{cloth:'Hoodie',Offer:"20-40% OFF"},{cloth:'Shirt',Offer:"40-60% OFF"}]
function App(){
    return (
        // header 
        // Main
        // Footer
        <div>
            <Header/>
            {/* <Card cloth="T-shirt" offer="20-80% OFF"/>
            <Card cloth="Jeans" offer="30-80% OFF"/>
            <Card cloth="Pants" offer="40-60% OFF"/>
            <Card cloth="Kurta" offer="10-80% OFF"/>
            <Card cloth="Pajama" offer="50-80% OFF"/>
            <Card cloth="Shoes" offer="20-30% OFF"/>
            <Card cloth="Shirt" offer="40-60% OFF"/>
            <Card cloth="Hoodie" offer="20-40% OFF"/> */}

            {
                arrCard.map((value,index)=><Card key={index} cloth={ value.cloth} offer={value.Offer}/>)
            }

        </div>
    )
}

const Root = ReactDOM.createRoot(document.querySelector('#root'))
Root.render(<App/>)