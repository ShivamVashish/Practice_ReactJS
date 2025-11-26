import React from "react";
import ReactDOM from "react-dom/client"

// const element1 = <h1>Hello Coder Army</h1> 

// props = {
//     name: "Shivam Sharma", props is nthg is only a object 
//     age:"24"
// }
function Greet(props) {
    return <h2>Ram Ram Bhaiya Ji {props.name}</h2>
}
const element2 = <Greet name="Shivam Sharma" age="24"/>//ye hote h mere props ye asa recieve hoge mere dekho ye data mere props ke pass hota h  // function call h ye only meri (Argument dekho asa pass krege isme hm)
const Root = ReactDOM.createRoot(document.querySelector("#root"))
Root.render(element2)

