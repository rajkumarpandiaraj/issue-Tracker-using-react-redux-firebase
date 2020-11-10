import React from 'react';
import IssueCard from './IssueCard';
import { connect } from 'react-redux'; 
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { open } from '../../redux/actions/issueActions';
import {handleSelectChange} from '../../redux/actions/issueActions';

function All(props) {
    const { issues, auth, open, formValue, handleSelectChange } = props;
    if(!auth.uid){
        return (
            <Redirect exact to='/login' />
        )
    }
    return (
        <div className='container w-50' id='container'>
            <select className="custom-select" value={formValue} onChange={handleSelectChange}>
                <option value='All'>All</option>
                <option value="Not Opened">Not Opened </option>
                <option value="Opened">Opened</option>
                <option value="Closed">Closed</option>
            </select>
            {
                issues && issues.map(issueItem => {
                    const issueItemStatus = issueItem.status === 'Not Opened' ?`/issue/${issueItem.id}` : ''
                    return (<Link to={{
                        pathname : `${issueItemStatus}`,
                        state : {
                            compo : 'all'
                        }
                    }}
                    id ='all-issue' 
                    key={issueItem.id}
                    onClick={issueItem.status === 'Not Opened' ? ()=> open(issueItem.id) : ()=>{}}>
                        <IssueCard  issueItem={issueItem}/>
                    </Link>)
                }
                )
            }
        </div>
    )
}
const mapStateToProp = state => {
    return{
        issues : state.firestore.ordered.issues,
        auth : state.firebase.auth,
        formValue : state.allIssueReducer.formValue,
        where : state.allIssueReducer.where
    }
}

const mapDispatchToProp = dispatch => {
    return {
        open : (id) => dispatch(open(id)),
        handleSelectChange : (e)=> dispatch(handleSelectChange(e))
    }
}

export default compose(
    connect(mapStateToProp, mapDispatchToProp),
    firestoreConnect(props =>{
        return [
        {
            collection : 'issues',
            where : props.where,
            orderBy : ['date', 'desc']
        }
    ]})
    )(All)
