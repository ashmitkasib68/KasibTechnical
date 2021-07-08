import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ListComp from './ListComp';






const ToDoLists = () => {


    const [items, setItems] = useState();
    const [arr, setArr] = useState([]);




    const itemEvent = (event) => {
        setItems(event.target.value);
    }


    const showItems = () => {

        setArr((preVal) => {
            return [...preVal, items];
        });
        setItems("");

    }




    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List </h1> 
                    <br />

                    <input type="text" placeholder="Add an item" onChange={itemEvent} value={items} />
                    <Button className="newBtn" onClick={showItems}> <AddIcon /> </Button>

                    <br />

                    <ol>
                        {arr.map((Val, index) => {
                            return <ListComp 
                            key={index}
                            text={Val} 
                            /> ;
                        })}
                    </ol>

                    <br />

                </div>
            </div>
        </>
    )

}



export default ToDoLists;


