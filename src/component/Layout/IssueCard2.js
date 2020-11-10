import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

function IssueCard2(props) {
    const { issueItem, auth, profile } = props;
    const {issue, status, openedBy, date} = issueItem;
    const proceedDate = moment(date.toDate()).calendar()

    if(!auth.uid){
        return <Redirect exact to='/login' />
    }

    let bgClass = '';
    if(status === 'Opened' ){
        bgClass = 'bg-warning'
    }else if(status === 'Re-Opened'){
        bgClass = 'bg-secondary'
    }else {
        bgClass = 'bg-success'
    }


    return (
        <>
        <div className={`card my-4 ${bgClass}`}>
            <div className="card-body">
                <p className='Issue mb-1 issue'>{issue}</p>
                <p className='card-subtitle' id='text-muted'>{proceedDate}</p>
                <p className='card-subtitle mt-2 mb-1 issue'>Status : {status}</p>
                <p className='card-subtitle issue'>OpenedBy : {profile.firstName + profile.lastName === openedBy ? 'you' : openedBy}</p>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

export default connect(mapStateToProps)(IssueCard2)
