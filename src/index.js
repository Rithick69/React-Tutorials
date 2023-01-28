//var React = require('react');
import React from 'react';
//var ReactDom = require('react-dom');
import ReactDom from 'react-dom';
import App from './App';

// ReactDom.render('What to show', 'Where to show', 'callback func');

const rootElement = document.getElementById("root");

// Rewriting Greeting Webpage using components;

ReactDom.render(
    <App />, rootElement
);