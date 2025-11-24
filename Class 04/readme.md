<!-- Production Ready Code Hmara jata h dist folder m 
command for Production Ready Code = npx parcel build index.html

asa krne se hmare sb kuch space vgera khtm ho jayga or bilkul optimize way m likh denge 

jo hmara dist folder hota h only 200 kb ka hota h hmare code ko full optimize kr deta h ye 
ye jo production ready code hota h ye hmare read krne ke liye nhi hota ye hota  bss production ke liye 

dist folder m ek mapping file hoti h wo kya krti h hmari wo hamre jo hmare phle format hota h code map file se hm phir se uss code m aa skte h 

ye 3 file hoti h ek index.html ek index.js or ek index.map.js hoti h or ye full optimiize way m hoti h 


Deploy Krege hm Netlify ke andr isko or only dist folder ko hi n 

deploy URL : https://reactfirst-project1.netlify.app/

JSX m hm React.createElement ko ab hm khi bhi use hi nhi krna chahte hm usko ab khi bhi use ni krege 

React                                                                element deta h HTML ka render function.
React.createElement = hme lakr deta tha ek react element(javascript object)=>render krne pr finally HTML elemnt m convert hota tha

JSX = isko facebook ke developer ne nhi bnaya ye baad m aya h jise hmari react ki journey easy ho gyi jsx is html like syntax not html 

Babel                           React                           Render
JSX => React.createElement()=>react element(JS Object) => HTML Element

So final:
✔ Babel → JSX → React.createElement
✔ React.createElement → Virtual DOM object
✔ root.render() → Actual HTML DOM create/update

JSX ke ander hm Javascript expressioon ko bhi andr daal skte h {} ye lga kr
const names = 'Shivam'
const obj = {
    name: 23,
    salary:60,
}
const newElement = (<>
    <h1 className="font-bold text-3xl">Hello Coder Army {names}</h1>
    <h2 className="font-bold text-3xl">Kaise h ap Sbhi log {obj.salary}</h2>
</>)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(newElement)

iske andr hm khud ka attributes bhi bna skte h 

SMall Intro

React Component 
1.class based component ( ye ab use nhi hota h )
2.function based component (its only a function )

React m jb bhi function create hoga alway capital letter se start hoga 