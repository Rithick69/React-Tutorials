import React from 'react';

function C3span(){
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
    return <span style={cssStyle}>{greeting}</span>;
}

export default C3span;