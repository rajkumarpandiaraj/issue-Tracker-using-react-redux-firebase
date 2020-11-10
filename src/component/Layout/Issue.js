import React from 'react';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import {closed} from '../../redux/actions/issueActions';
import {reOpen} from '../../redux/actions/issueActions';
import moment from 'moment';

function Issue(props) {
    const { issueObj, auth, closed, reOpen } = props;
    const {compo} = props.location.state
    const {issue, name, address, mobile, date} = issueObj;
    const processedDate = moment(date.toDate()).calendar();
    const id = props.match.params.id
    if(!auth.uid){
        return <Redirect exact to='/login' />
    }
    return (
        <div className='container'>
            <div className="card w-75 mx-auto">
                <div className="card-body">
                    <h5 className="card-title mb-2">{issue}</h5>
                    <h6 className='card-subtitle text-muted mb-3'>{processedDate}</h6>
                    <p className='card-text mb-2'><span className='font-weight-bold'>Name : </span> {name}</p>
                    <div className='card-text address mb-2'><p className='font-weight-bold mb-0'>Address :</p>{address}</div>
                    <p className='card-text'><span className='font-weight-bold'>Mobile :</span> {mobile}</p>
                    <div className='d-flex'>
                        
                        {
                            compo === 'opened' && ( <><Link to='/opened' exact>
                                                    <button className="btn btn-primary">Back</button>
                                                </Link>
                                                <button className="btn btn-danger ml-4" onClick={()=> closed(id)}>Close</button>
                                                </> )
                        }
                        {
                            compo === 'closed' && ( <><Link to='/closed' exact>
                                                    <button className="btn btn-primary">Back</button>
                                                </Link> 
                                                <button className="btn btn-danger ml-4" onClick={()=> reOpen(id)}>re-Open</button>
                                                </>)
                        }
                        {
                            compo === 'all' && ( <><Link to='/' exact>
                                                    <button className="btn btn-primary">Back</button>
                                                </Link>
                                                <button className="btn btn-danger ml-4" onClick={()=> closed(id)}>Close</button> 
                                                </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id ;
    const issues = state.firestore.data.issues;
    const issueObj = issues && issues[id];
    return {
        issueObj : issueObj ? issueObj : {},
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        closed : (id) => dispatch(closed(id)),
        reOpen : (id) => dispatch(reOpen(id)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection : "issues",
        }
    ])
)(Issue)
