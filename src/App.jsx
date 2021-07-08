import React from 'react';
/* import {add, sub, div, mult} from './Calc'; */
/* Importing Card component */
import Card from './Cards';
/* Importing Series data */
import Sdata from './Sdata';




const App = () => {
    return (
        <>

        <h1 className = "heading"> List of Top 6 Netflix series of 2021 </h1>
    
        
        
        {Sdata.map((bal) => {
          return (
            <Card
              key = {bal.id}
              imgsrc = {bal.imgsrc}
              category = {bal.category}
              sname = {bal.sname}
              link = {bal.link}
            />
          );
        })}
        
    
      </>
    );
}


export default App;





/* function App(){
    return (
        <>
    <ul>
      <li>Sum of two numbers is {add(2, 43)}</li>
      <li>Substraction of two numbers is {sub(55, 10)}</li>
      <li>Division of two numbers is {div(90, 13)}</li>
      <li>Multiplication of two numbers is {mult(22, 3.1416)}</li>
    </ul>
  </>
    );
}

export default App;
 */







/* function App() {
    let curTime = new Date();
    curTime = curTime.getHours();

    let greeting = '';


    let cssStyle = {
    color: 'black',
    }



    if(curTime >= 1 && curTime <= 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'green';
    } else if(curTime >= 12 && curTime <= 19) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'orange';
    } else {
    greeting = 'Good Night';
    }


    return (
        <>
            <div>
                <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
            </div>
        </>
    );

}


export default App; */