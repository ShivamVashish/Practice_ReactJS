import React from "react"
import ReactDOM from 'react-dom/client'
const list1 = React.createElement('li',{key:'1'},'HOME')
const list2 = React.createElement('li',{key:'2'},'ABOUT')
const list3 = React.createElement('li',{key:'3'},'PRODUCT')
const list4 = React.createElement('li',{key:'4'},'SERIVCE')
const list5 = React.createElement('li',{key:'5'},'CONTACT')
const unorderedlist = React.createElement('ul',{key:'1',className:'flex flex-wrap justify-end gap-10 font-bold  md:text-md lg:text-sm'},[list1,list2,list3,list4,list5])
const container = React.createElement('div',{className:'p-10 bg-pink-800 text-white'},[unorderedlist])
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(container)

// Full Responsive All Devices
// React JS ke andr bhi hm HTML like sytanx likh skte h using JSX and JSX is not a part of react its a technique

// Bundler (Parcel) is a tool used to manage, bundle, and optimize code to make it production-ready for deployment.(ye Hmare Code m extra chezze hta kr jo usefull h unhe hi bundle bna kr rkh deta h )

// How to Install (Parcel) Command
//1 npm init -> Package.json(install ho gyi) ko Initialize kia ()
//2 npm install parcel (Install Parcel)(Node Modules Download ho gya)

// NPM javaScript ka database smj skte h (NPM ke andr hi react react-dom ka code iske andr hota h )

// Package.JSON(Iske Pass mere project ki details hoti h)
// Package-lock.json(Iske andr sbhi ki pure project ke chote chote har ek chez pure modules ki detai hoti h)


// React Install Command
// npm install react 
// npm install react-dom

// Dependencies Parcel bhi bht sare code ko lekr arra h apne sath kyuki ye bht hi bht sari file iske ek dusre se attach hoti h sbhi kisi na kisi pr dependent hoti h
//  Ye kheta h ki mera ye project kiske upr dependent h mera ye project inke upr dependent h 
// dependencies": {
//     "parcel": "^2.16.1",
//     "react": "^19.2.0",
//     "react-dom": "^19.2.0"
//   }