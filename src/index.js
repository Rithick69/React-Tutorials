//var React = require('react');
import React from 'react';
//var ReactDom = require('react-dom');
import ReactDom from 'react-dom';
import "./styles.css";
import App from './App';

// ReactDom.render('What to show', 'Where to show', 'callback func');

const rootElement = document.getElementById("root");

// Challenge 3: Creating a simple greeting web page.

let curr = new Date();
curr = curr.getHours();
let greeting = '';
const cssStyle = {};
if(curr < 12){
    greeting = 'Good Morning';
    cssStyle.color = 'green';
}
else if(curr < 19){
    greeting = 'Good Afternoon';
    cssStyle.color = 'yellow';
}
else{
    greeting = 'Good Night';
    cssStyle.color = 'black';
}

ReactDom.render(
    <>
        <div className='challenge3'>
            <h1 className='challenge3h1'>
                Hello Sir,
                <span style={cssStyle}> {greeting}</span>
            </h1>
        </div>
    </>,
    rootElement
);

// Components
// We break our code into multiple components and import them through
// App.jsx component

ReactDom.render(
    <App />, rootElement
);