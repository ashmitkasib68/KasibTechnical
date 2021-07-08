import React, { useState } from 'react'




const Contact = () => {


    const [data, setData] = useState({
        fullName: '',
        phone: '',
        email: '',
        msg: ''
    })



    const inputEvent = (event) => {
        const {name, value} = event.target;


        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })


    }



    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Full Name: ${data.fullName}, Mobile No: ${data.phone}, Email: ${data.email} and what I wanna say is "${data.msg}"`)
    }


    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contact Us </h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phoneNo} onChange={inputEvent} placeholder="ex. +880123456789" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email_addr} onChange={inputEvent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.message} onChange={inputEvent}></textarea>
                            </div>
                            <div className='mb-3'>
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;