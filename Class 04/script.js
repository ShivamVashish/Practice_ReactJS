import React from "react";
import ReactDOM from "react-dom/client"
const li1 = React.createElement('li',{key:1},'Home')
const li2 = React.createElement('li',{key:2},'About')
const li3 = React.createElement('li',{key:3},'Service')
const li4 = React.createElement('li',{key:4},'Contact')
const unordered = React.createElement('ul',{key:1,className:'flex gap-10 justify-end pr-20 pt-10 pb-10 font-bold text-xl'},[li1,li2,li3,li4])
const element1 = React.createElement('div',{className:'bg-red-600 text-white'},[unordered])
const newElement = <h1>Hello Coder Army</h1>
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(newElement)

JSX : JavaScript XML 

const names = 'Shivam'
const obj = {
    name: 23,
    salary:60,
}
const newElement = (<>
    <h1 className="font-bold text-3xl">Hello Coder Army {names}</h1>
    <h2 className="font-bold text-3xl">Kaise h ap Sbhi log {obj.salary}</h2>
    <h2 monee={23}>Frontend Developer</h2> // asa jara h as a number hmare andr 
</>)

// function Based COmponent

function greet(){
    return  <h1>Aur Bhai ksa h </h1>
}
// arrow function 
// const meet = ()=>{
//     return <h2>Mera sb acha h tum btao kse ho </h2>
// }
// const resultmeet = meet()
const newElement2 = greet()
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(newElement2)

// root.render({greet() {meet()}})