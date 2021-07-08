import React from 'react'
import home from './images/home.jpg'
import { NavLink } from 'react-router-dom'




const Common = (props) => {
    return (
        <>
            <section className='d-flex align-items-center' id="header">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto my-5'>
                            <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                                <h1> {props.name} <strong className='brand-name'>KasibTechnical</strong> </h1>
                                <h2 className='my-3'> We are the team of talented developers making websites </h2>
                                <div className='mt-3'>
                                    <NavLink to={props.visit} className='btn-get-started'>{props.btnName}</NavLink>
                                </div>
                            </div>
                            

                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={props.imgsrc} className='img-fluid animated' alt='animated' />
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;