import React, { useState } from 'react';
import './accordion.css';
import { questions } from './Api';
import MyAccordion from './MyAccordion';






const Accordion = () => {


    const [data, setData] = useState(questions);





    return (
        <>
            <section className="main-div">
                
                <h1> React Interview Questions </h1>

                {data.map((currentData) => { 
                    const {id} = currentData;
                    return <MyAccordion key={id} {...currentData} />;
                })}



            </section>
        </>
    );
}



export default Accordion;