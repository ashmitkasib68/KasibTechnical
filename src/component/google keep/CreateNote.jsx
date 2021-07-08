import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';






const CreateNote = (props) => {



    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [showKeep, setShowKeep] = useState(false);




    const inputEvent = (event) => {

        const {name, value} = event.target;
        

        setNote((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
        console.log(note);

        
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        });
    }



    const showIt = () => {
        setShowKeep(true);
    }

    const backToNormal = () => {
        setShowKeep(false);
    }


    return (
        <>
            <div className="main_note">
                <form onDoubleClick={backToNormal}>
                     {showKeep ? <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" /> : null}
                    <textarea rows="" column="" name="content" value={note.content} onChange={inputEvent} placeholder="Write a note..." onClick={showIt}></textarea>
                    {showKeep ? <Button onClick={addEvent}> <AddIcon className="plus_sign" /> </Button> : null}
                </form>
            </div>
        </>
    );
}



export default CreateNote;