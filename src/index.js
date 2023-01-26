//var React = require('react');
import React from 'react';
//var ReactDom = require('react-dom');
import ReactDom from 'react-dom';
import "./styles.css";

// ReactDom.render('What to show', 'Where to show', 'callback func');

const rootElement = document.getElementById("root");

ReactDom.render(
    <div>
        <h1>Hello World</h1>
        <p>Please support</p>
    </div>,
    rootElement
);

//For react -v16 and above it's possible for render() to return an array of elements.

ReactDom.render([<h1>Hello World</h1>, <p>Please support</p>], rootElement);

//Fragment why use them?

ReactDom.render(
    <div>
    {/* This div creates an extra div inside the "root" div */}
        <h1>Hello World</h1>
        <p>Please support</p>
    </div>,
    rootElement
);

//to avoid that we use fragments

ReactDom.render(
    <React.Fragment>
        <h1>Fragment 1</h1>
        <p>Fragment 1</p>
    </React.Fragment>,
    rootElement
);
//check dev console to notice the difference
//another way of writing react.fragment is:

ReactDom.render(
    <>
        <h1>Fragment 2</h1>
        <p>Fragment 2</p>
    </>,
    rootElement
);

// Rendering Challenge
ReactDom.render(
    <>
        <h1>Top 5 Web Series</h1>
        <ol>
            <li> Modern Family </li>
            <li> The Office </li>
            <li> Friends </li>
            <li> Family Guy </li>
            <li> How I met your mother </li>
        </ol>
    </>,
    rootElement
);

// JSX expression in react

const name = "Rithick";

ReactDom.render(
    <>
        <h1> My name is {name} </h1>
        <p>Hello!!</p>
        <p> 2 + 3 is equal to {2 + 3} </p>
        {/* We can call methods and use multiple expressions inside the curly braces. */}
        {/* We can't use statements like loop or if-else inside the curly braces */}
    </>,
    rootElement
);

// Template Literals.

const fname = "Rithick";
const lname = "Chowdhury";

ReactDom.render(
    <>
        <h1> My name is {fname + " " + lname} </h1>
        <p>Hello!!</p>
    </>,
    rootElement
);

// To use template literals use `${}`.

ReactDom.render(
    <>
        <h1> {` My name is ${fname} ${lname}`} </h1>
        <p>Hello!!</p>
    </>,
    rootElement
);

// Rendering Challenge 2:

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDom.render(
    <>
        <h1> {` My name is ${fname} ${lname}`} </h1>
        <p>Current Date is {currDate}</p>
        <p>Current Time is {currTime}</p>
    </>,
    rootElement
);

// JSX Attributes are same as HTML Attribute

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://picsum.photos/";
ReactDom.render(
    <>
        <h1 contentEditable="true"> {` My name is ${fname} ${lname}`} </h1>
        <img src={img1} alt="Image1 here" />
        <img src={img2} alt="Image2 here" />
        <a href={links} target="_blank" rel="noreferrer">
            <img src={img3} alt="Image3 here" />
        </a>
    </>,
    rootElement
);

// Using CSS in JSX
// Import CSS file see Line 3.
// class is already used in React as a component, so we have to use
// className attribute to add css.

ReactDom.render(
    <>
        <h1 className="heading"> {` My name is ${fname} ${lname}`} </h1>
        <div className="img-div">
            <img src={img1} alt="Image1 here" />
            <img src={img2} alt="Image2 here" />
            <a href={links} target="_blank" rel="noreferrer">
                <img src={img3} alt="Image3 here" />
            </a>
        </div>
    </>,
    rootElement
);