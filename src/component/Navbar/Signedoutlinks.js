import React from 'react';
import { NavLink } from 'react-router-dom';


function Signedoutlinks() {
    return (
        <>
            <li className="nav-item active mx-3 py-2">
            <NavLink to='/login' exact  className='menu' activeClassName='menu-active'>
                Login
            </NavLink>
        </li>
        <li className="nav-item mx-3 py-2">
            <NavLink to='/signup' exact  className='menu' activeClassName='menu-active'>
                SignUp
            </NavLink>
        </li>
        
        </>
    )
}

export default Signedoutlinks
