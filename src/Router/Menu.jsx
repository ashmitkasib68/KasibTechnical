import React from 'react';
import { NavLink, Link } from 'react-router-dom'






const Menu = () => {

    return (
        <>
          <div className="main_div">
            <NavLink exact activeClassName="active_class" to='/' > About us </NavLink>
            <NavLink exact activeClassName="active_class" to='/contact' > Contact </NavLink>
            <NavLink exact activeClassName="active_class" to='/service' > Service </NavLink>
          </div>  
        </>
    )    


}


export default Menu;





