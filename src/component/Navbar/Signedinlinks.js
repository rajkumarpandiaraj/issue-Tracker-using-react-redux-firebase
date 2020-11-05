import React from 'react';
import { NavLink } from 'react-router-dom';


function Signedinlinks() {
    return (
        <>
            <li className="nav-item active mx-3 py-2">
            <NavLink to='/' exact  className='menu' activeClassName='menu-active'>
                All
            </NavLink>
        </li>
        <li className="nav-item mx-3 py-2">
            <NavLink to='opened'  className='menu' activeClassName='menu-active'>
                Opened
            </NavLink>
        </li>
        <li className="nav-item mx-3 py-2">
            <NavLink to='/closed'  className='menu' activeClassName='menu-active'>
                Closed
            </NavLink>
        </li>
        <li className="nav-item mx-3 mr-4 menu py-2">
            LogOut
        </li>
        </>
    )
}

export default Signedinlinks
