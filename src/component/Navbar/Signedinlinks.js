import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authAction';

function Signedinlinks({logout}) {
    return (
        <>
            <li className="nav-item active mx-3 py-2">
            <NavLink to='/' exact  className='menu' activeClassName='menu-active'>
                All
            </NavLink>
        </li>
        <li className="nav-item mx-3 py-2">
            <NavLink to='/opened' exact  className='menu' activeClassName='menu-active'>
                Opened
            </NavLink>
        </li>
        <li className="nav-item mx-3 py-2">
            <NavLink to='/closed' exact className='menu' activeClassName='menu-active'>
                Closed
            </NavLink>
        </li>
        <li className="nav-item mx-3 mr-4 menu py-2" onClick={logout}>
            LogOut
        </li>
        </>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        logout : () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Signedinlinks)
