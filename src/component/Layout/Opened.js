import React from 'react'
import IssueCard from './IssueCard';


function Opened() {
    return (
        <div className='container w-50 my-4' id='container'>
            <IssueCard/>
            <IssueCard/>
            <IssueCard/>
            <IssueCard/>
        </div>
    )
}

export default Opened
