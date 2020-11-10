import React from 'react'
import IssueCard2 from './IssueCard2';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Opened(props) {
    const { auth, issues } = props;
    
    if(!auth.uid){
        return <Redirect exact to='/login' />
    }
    return (
        <div className='container w-50' id='container'>
            
            {
                issues && issues.map(issueItem => {
                    const issueItempath = `/issue/${issueItem.id}`
                    return (<Link to={{
                        pathname : `${issueItempath}`,
                        state : {
                            compo : 'opened'
                        }
                    }}
                    id ='all-issue' 
                    key={issueItem.id}
                    exact ='true'>
                        <IssueCard2  issueItem={issueItem}/>
                    </Link>)
                }
                )
            }
        </div>
    )
}
const mapStateToProps = state => {
    return{
        issues : state.firestore.ordered.issues,
        auth  : state.firebase.auth,
        
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        return [{collection : 'issues',
            where : [
                ['status','in', ['Opened', 'Re-Opened'] ],
                ['openedId','==', `${props.auth.uid}` ]
        ],
        orderBy : ['openedDate', 'desc']
    }]
    })
)(Opened)
