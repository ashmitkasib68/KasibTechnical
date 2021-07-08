import React, { useState } from "react";
import Header from "./Header";
import "./index.css";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";






const App = () => {

    const [addItem, setAddItem] = useState([]);


    const addNote = (note) => {
        setAddItem((preData) => {
            return [...preData, note];
        })
        
    }







    const eraseItem = (id) => {
        setAddItem((preData) => {
            return preData.filter((value, index) => {
                return index !== id;
            })
        })
    }






    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            {addItem.map((currentValue, index) => {
                return <Note 
                key={index}
                id={index}
                title={currentValue.title} 
                content={currentValue.content}
                passNote={eraseItem}
                />
            })}
            
            <Footer />
        </>
    );
}



export default App;