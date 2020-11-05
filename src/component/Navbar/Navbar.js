import React from 'react';
import Signedinlinks from './Signedinlinks';

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <h1 className='text-white'>Issue Tracker</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

    <div className="collapse navbar-collapse mr-4" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-4">
        <Signedinlinks/>
    </ul>
  </div>
</div>
    )
}

export default Navbar
