import React from 'react';





function add(x, y){
    let sum = x + y;
    return sum;
}
function sub(x, y){
    let sub = x - y;
    return sub;
}
function div(x, y){
    let div = x / y;
    return div.toFixed(2);
}
function mult(x, y){
    let mult = x * y;
    return mult.toFixed(2);
}


export {add, sub, div, mult};