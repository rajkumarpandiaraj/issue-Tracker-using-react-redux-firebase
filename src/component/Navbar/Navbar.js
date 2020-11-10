import React from 'react';
import Signedinlinks from './Signedinlinks';
import { connect } from 'react-redux';
import Signedoutlinks from './Signedoutlinks';

function Navbar(props) {
    const { auth } = props
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <h1 className='text-white'>Issue Tracker</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

    <div className="collapse navbar-collapse mr-4" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-4">
        {
            auth.uid ? <Signedinlinks/> : <Signedoutlinks/>
        }
    </ul>
  </div>
</div>
    )
}

const mapStateToProps = state => {
    return {
        auth : state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)
