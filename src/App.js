import React from 'react'




const App = () => {

  return (
    <>
    
    </>
  )

}



export default App;

























/* import React, { useState, useEffect } from 'react';
import axios from 'axios';










const App = () => {


  const [num, setNum] = useState()
  const [Name , setName] = useState()
  const [moves, setMoves] = useState()

  const selectEvent = (event) => {
    setNum(event.target.value);
  }


  useEffect(() => {
    
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setName(res.data.name)
      setMoves(res.data.moves.length)
      
    }
    getData();
    
  })

 
  return(
    <>
  
        <h1> My name is <span style={{color: "red",}}> {Name} </span> </h1>
        <h1> I have <span style={{color: "red",}}> {moves} </span> moves </h1>

        <select value={num} onChange={selectEvent}>
            <option value="1"> 1 </option>
            <option value="25"> 25 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
        </select>

    </>
  )
} 


export default App; */

























/* import React, { useEffect, useState } from 'react'





export default function App() {


  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `You have clicked ${num} times`;
  })




  const increase = () => {
    setNum(num+1);
  }





  return (
    <>
      <button onClick={increase}> Click Here {num} </button>
    </>
  )
} */





























/* import React from 'react';
import Accordion from './component/accordion/Accordion'







const App = () => {
  return <Accordion />;
}



export default App;
 */
























/* import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';





const App = () => {

  
  const [increm, setIncrem] = useState(0);



  const increment = () => {
    setIncrem((oldVal) => {
      return oldVal + 1;
    });
  }
  const decrement = () => {
    if(increm > 0){
      setIncrem((oldVal) => {
        return oldVal - 1;
      });
    }else {
      alert("Sorry, the number cannot be less than zero");
    }
  }
    



  return(
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <h1> {increm} </h1>
          <div className="btnDiv">
            <Button onClick={increment} className="btn btnGreen"> <AddIcon /> </Button>
            <Button onClick={decrement} className="btn btnRed"> <DeleteIcon /> </Button>
          </div>
        </div>
        
      </div>
    </>
  );

}


export default App; 


 */
































/* import React, { useState } from 'react';
import ToDoList from './ToDoList';




const App = () => {


  const [inputVal, setInputVal] = useState("");
  const [items, setItems] = useState([]);



  const itemEvent = (EVENT) => {
      setInputVal(EVENT.target.value);
  }


  const showItem = () => {
      setItems((oldArr)=>{
        return [...oldArr, inputVal];
      });
      setInputVal("");
  }




  const deleteItems = (itemID) => {
    console.log("Clicked");
    setItems((oldArr) => {
      return oldArr.filter((x, index) => {
        return index !== itemID;
      });
    })

  }






  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDoList </h1>
          <br />
          <input type="text" placeholder="Add an item" onChange={itemEvent} value={inputVal} />
          <button onClick={showItem}> + </button>

        <ol>

          {items.map((eachItem, index) => {
            return <ToDoList 
            key={index}
            id={index}
            text={eachItem}
            onPress={deleteItems} 
            />
          })}

        </ol>


        </div>
      </div>
    </>
  )


  
}


export default App; */































/* import React, { useState } from 'react';





const App = () => {


  const [fullName, setFullName] = useState(
    {
      firstName : '',
      lastName : '',
      email_addr : '',
      mobileNo : ''
    }
  );


  const inputEvent = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);


    const value = e.target.value;
    const name = e.target.name;

    setFullName((preValue) => {
        if(name === 'fName') {
          return {
            firstName : value,
            lastName : preValue.lastName,
            email_addr : preValue.email_addr,
            mobileNo : preValue.mobileNo
          }
        }else if(name === 'lName') {
          return {
            firstName : preValue.firstName,
            lastName : value,
            email_addr : preValue.email_addr,
            mobileNo : preValue.mobileNo
          }
        }else if(name === 'Email') {
          return {
            firstName : preValue.firstName,
            lastName : preValue.lastName,
            email_addr : value,
            mobileNo : preValue.mobileNo
          }
        }else if(name === 'MobileNo') {
          return {
            firstName : preValue.firstName,
            lastName : preValue.lastName,
            email_addr : preValue.email_addr,
            mobileNo : value
          }
        }
    });


  } 



  const ShowInputValue = (event) => {
      event.preventDefault();
  }


  return(

    <>

      

      <div className="main_div">
      
        <form onSubmit={ShowInputValue}>
          <div>

              <h1> Hello {fullName.firstName} {fullName.lastName} </h1>
              <p> {fullName.email_addr} </p>
              <p> {fullName.mobileNo} </p>

              <input 
                type="text"
                placeholder="Enter Your First Name"
                name="fName"
                onChange={inputEvent}
                
              />
              <br />
              <input 
                type="text"
                placeholder="Enter Your Last Name"
                name="lName"
                onChange={inputEvent}
                
              />
              <br />
              <input 
                type="text"
                placeholder="Enter Your Email Address"
                name="Email"
                onChange={inputEvent}
                
              />
              <br />
              <input 
                type="text"
                placeholder="Enter Your Mobile Number"
                name="MobileNo"
                onChange={inputEvent}
                
              />

              <button type="submit"> Submit Me❤️ </button>
              


          </div>
        </form>
      </div>

    </>
  );


}


export default App; */



















// import React, { useState } from 'react';





// const App = () => {


//   const [myFullName, setMyFullName] = useState({
//     fname : "",
//     lname : "",
//   });
  
  
//   const inputEvent = (e) => {
//     console.log(e.target.value);
//     console.log(e.target.name);

//     const value = e.target.value;
//     const name = e.target.name;


//     setMyFullName((preValue) => {
//         if(name === 'fName') {
//           return {
//             fname: value,
//             lname: preValue.lname
//           }
//        }else if(name === 'lName') {
//           return {
//             fname : preValue.fname,
//             lname : value
//           }
//        }
//     });


//   }
 

//   const ShowInputValue = (event) => {
//       event.preventDefault();
      
//   }



//   return(
//     <>
//       <div className="main_div">
//         <form onSubmit={ShowInputValue}>
//           <div>
//             <h1> Hello {myFullName.fname} {myFullName.lname} </h1>
//             <input 
//               type="text" 
//               placeholder="Enter Your Name" 
//               name='fName'
//               onChange = {inputEvent} 
//               // value={myFullName.fname} 
//             />
//             <br />
//             <input 
//               type="text" 
//               placeholder="Enter Your Last Name" 
//               name='lName'
//               onChange = {inputEvent} 
//               // value={myFullName.lname} 
//             />
//             <button type="submit"> Submit Me❤️ </button>
//           </div>
//         </form>
//       </div>
      
//     </>
//   );
// }


// export default App;

















































/* const App = () => {


  const [myName, UpdatedName] = useState();
  const [showVal, UpdateVal] = useState();
  const [showVal2, UpdateVal2] = useState();
  const [lastName, setLastName] = useState();
  
  const rapperKuddus = (e) => {
    UpdatedName(e.target.value);
  }
  const rapperShorif = (e) => {
    setLastName(e.target.value);
  }

  const ShowInputValue = (event) => {
      event.preventDefault();
      UpdateVal(myName);
      UpdateVal2(lastName);
  }



  return(
    <>
      <div className="main_div">
        <form onSubmit={ShowInputValue}>
          <div>
            <h1> Hello {showVal} {showVal2} </h1>
            <input 
              type="text" 
              placeholder="Enter Your Name" 
              onChange = {rapperKuddus} 
              value={myName} 
            />
            <br />
            <input 
              type="text" 
              placeholder="Enter Your Last Name" 
              onChange = {rapperShorif} 
              value={lastName} 
            />
            <button type="submit"> Submit Me❤️ </button>
          </div>
        </form>
      </div>
      
    </>
  );
}


export default App; */





























/* import React, { useState } from 'react';




export default function App () {

  let originalColor = '#8e44ad';
  const [background, ChangedBackground] = useState(originalColor);

  let buttonTxt = 'Click Me'; 
  const [BtnText, changedBtnText] = useState(buttonTxt);


  let changePage = () => {

    let newColor = '#34495e';
    let newText = 'Ouch!! 🤒 ';
    ChangedBackground(newColor);
    changedBtnText(newText);

  }

  let backToPage = () => {

    ChangedBackground(originalColor);
    changedBtnText("Ayyo!! 😠 ");

  }


  return(
    <>
      <div style={{ backgroundColor : background }}>
        <button onMouseEnter = {changePage} onMouseLeave = {backToPage}> {BtnText} </button>
      </div>
    </>
  );

} */

























// import React, { useState } from 'react';



// export default function App() {

//   let time = new Date().toLocaleTimeString();

//   const [cTime, Update_Time] = useState(time);


//   const showUpdatedTime = () => {
//     time = new Date().toLocaleTimeString();
//     Update_Time(time);
// }

//   setInterval(showUpdatedTime, 1000)

//   return (
//     <>

//       <h1> {time} </h1>

//     </>
//   );
// }
















// import React, { useState } from 'react';



// const App = () => {

//   let newTime = new Date().toLocaleTimeString();

//   const [myCtime, UpdatedTime] = useState(newTime);
//   const ShowUpdatedTime = () => {
//       let showTime = new Date().toLocaleTimeString();
//       UpdatedTime(showTime);
//   }

//   return (

   

//     <>
//       <div> 
//         <h1> {myCtime} </h1>
//         <button onClick={ShowUpdatedTime}> Get Time </button>
//       </div>
//     </>
//   );
// }


// export default App;



























// import React from 'react';
// /* import {add, sub, div, mult} from './Calc'; */
// /* Importing Card component */
// import Card from './Cards';
// /* Importing Series data */
// import Sdata from './Sdata';




// const App = () => {
//     return (
//         <>

//         <h1 className = "heading"> List of Top 6 Netflix series of 2021 </h1>
    
        
        
//         {Sdata.map((bal) => {
//           return (
//             <Card
//               key = {bal.id}
//               imgsrc = {bal.imgsrc}
//               category = {bal.category}
//               sname = {bal.sname}
//               link = {bal.link}
//             />
//           );
//         })}
        
    
//       </>
//     );
// }


// export default App;





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








