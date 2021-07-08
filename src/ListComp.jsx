import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';







const ListComp = (props) => {

    
    const [line, setLine] = useState(true);


    const deleteIcon = () => {
        setLine(false);
    }



    return (
        <>
            <div className="todo_style">
                <span>
                    <DeleteIcon className="deleteIcon" onClick={deleteIcon} />
                </span>
                <li style={{textDecoration: line ? "none" : "line-through"}}> {props.text} </li> 
            </div>
        </>
    );
}



export default ListComp;