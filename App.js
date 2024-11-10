/*

<div id="parent">
<div id="child">
<h1>Hello h1</h1>
<h2>Hello h2</h2>
</div>
<div id="child2">
<h1>Hello h1</h1>
<h2>Hello h2</h2>
</div>
</div>

React.createElement(object) => HTML (browsee understands)
*/

const parent=React.createElement("div", {id:'parent'},
     [React.createElement("div", {id:'child'}, 
        [React.createElement("h1", {}, "Hello h1 tag"),
            React.createElement("h2", {}, "Hello h2 tag")
        ]),
        React.createElement("div", {id:'child2'}, 
            [React.createElement("h1", {}, "Hello h1 tag"),
                React.createElement("h2", {}, "Hello h2 tag")
            ])])


// const heading=React.createElement("h1", {id:"heading", abc:"retet"}, "Hello World from React!!!!!");

// console.log(heading) //gives object

console.log(parent)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)