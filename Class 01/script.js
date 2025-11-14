// Create element through Javascript



// const header1 = document.createElement('h1')
// header1.innerText = 'Hello Coder Army';
// header1.style.backgroundColor='blue';
// header1.style.fontSize = '30px'
// header1.style.color = 'white'
// const root = document.querySelector('#root')
// root.appendChild(header1)
// root.appendChild(header2)
// M ye chahta hu ki dom ko m khudse manupulate na kru to mne kya kia ek new object bna dia jo khud khud handle krega or uska name h ReactDOM 


const React = {
      createElement: function(tag, props, children) {
        const element = document.createElement(tag);
        if (typeof children === 'object' && children !== null) {
          for (let value of children) {
            element.appendChild(value);
          }
        } else {
          element.innerText = children;
        }
        for (let key in props) {
          if (key === 'className') {
            element.className = props[key]; 
          }
        }
        return element;
      }
    };
    const header1 = React.createElement(
      'h1',
      { className: 'text-3xl font-bold text-white bg-blue-900 p-2' },
      'Hello Coder Army'
    );
    const header2 = React.createElement(
      'h1',
      { className: 'text-3xl font-bold text-white bg-black mt-5 p-2' },
      'Hello Coder Army'
    );
    const li1 = React.createElement('li', {}, 'HTML');
    const li2 = React.createElement('li', {}, 'CSS');
    const li3 = React.createElement('li', {}, 'JavaScript');
    const list = React.createElement(
      'ul',
      { className: 'text-3xl font-bold list-disc pl-8 mt-5' },
      [li1, li2, li3]
    );
    const app = React.createElement('div', {}, header1, header2, list);

    const Root = ReactDOM.createRoot(document.querySelector('#root'));
    Root.render(app);
    
// const ReactDOM = {
//     render:function(element,root){
//         root.append(element)
//     }
// }