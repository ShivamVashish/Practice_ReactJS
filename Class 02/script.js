// const React = {
//   createElement:function(tag,props,children){
//     const element = document.createElement(tag)
//     if(typeof children == 'object'){
//       for(let val of children)
//         element.append(val)
//     }
//     else
//     element.innerText = children;
//     for(let key in props){
//       element.style[key]= props[key]
//     }
//     return element;
//   } 
// }

// const ReactDOM = {
//   render:function(element,root){
//     root.append(element)
//   }
// }

// const header1 = React.createElement('h1',{backgroundColor:'orange',color:"white",fontSize:'50px',textAlign:'center',marginBottom:'20px'},"Hello Coder Army")
// const header2 = React.createElement('h2',{backgroundColor:'blue',color:"white",fontSize:'50px',textAlign:'center'},"Kaise ho ap sb log")
// const para = React.createElement('p',{backgroundColor:'green',color:"white",fontSize:'50px',textAlign:'center',marginBottom:'20px'},'Frontend Developer')
// const l1 = React.createElement('li',{},'HTML')
// const l2 = React.createElement('li',{},'CSS')
// const l3 = React.createElement('li',{},'JavaScript') 
// const unorderedlist = React.createElement('ul',{backgroundColor:'red',color:"white",fontSize:'50px',textAlign:'center',marginBottom:'20px'},[l1,l2,l3])
// const root = document.querySelector('#root')
// ReactDOM.render(unorderedlist,document.querySelector('#root'))
// ReactDOM.render(para,document.querySelector('#root'))
// ReactDOM.render(header1,document.querySelector('#root'))
// ReactDOM.render(header2,document.querySelector('#root'))


const element1 = React.createElement('h1',{className:'text-9xl bg-red-600 font-bold text-white p-4 text-center'},'Hello Coder Army')
const element2 = React.createElement('h1',{className:'bg-blue-600 font-bold text-9xl text-white p-4 text-center'},"Frontend Developer")
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(element1)
root.render(element2)



// Ye overlap krra h hmare previous wale ko ye bss jo current m hota h isko hi show krate h or kisi ko nhi krata show ye
