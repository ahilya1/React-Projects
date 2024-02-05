import React from 'react';
import ReactDOM from 'react-dom/client';


 // This is old way to create Dom elements

/*const heading = React.createElement("h1",{ id:"heading",xyz:"abc"},"Hello World Form React !");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)*/


//using jsx

/*const jsxheading = (<h1 id="heading">
                       Namaste React Using jsx!.
                    </h1>)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading)*/


//React Element
const heading = <h1>This is React Element</h1>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading) //we render react element here not a component

// React Component
//React functional component

const HeadingComponent = ()=>{
    return(
        <div>
            <h1 className='heading'>This is functional component</h1>
        </div>
    )
}

const HeadingComponent2 =()=>(
    <div>
        <h1>This is heading component2</h1>
    </div>
)
//both above are same code


// we built this nested div
/*
    <div id="parent">
        <div id="child">
            <h1>I am in h1 tag</h1>
            <h2> I am in h2 tag</h2>
        </div>
         <div id="child2">
            <h1>I am in h1 tag</h1>
            <h2> I am in h2 tag</h2>
        </div>
    </div>
*/

// const parent = React.createElement("div",{id:"parent"},
//             [
//                React.createElement("div",{id:"child"},
//                [
//                React.createElement("h1",{},"This is Namaste React "),
//                React.createElement("h2",{},"I am in h2 tag"),
//                ]
//                ),
//                React.createElement("div",{id:"child2"},
//                [
//                React.createElement("h1",{},"kadkfskdsjfdkfjkldfsds tag"),
//                React.createElement("h2",{},"I am in h2 tag"),
//                ]
//                )
//             ]
//                );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)