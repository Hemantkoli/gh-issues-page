import React from 'react'
import './Issues.scss'

import Markdown from '../Markdown/Markdown'
import Comments from '../Comments/Comments'

const Issue=props=>{
    return (
        <React.Fragment>
            <Markdown repoURL={props.location.details.issue.repository_url}/>
            <Comments commentsURL={props.location.details.issue.comments_url}/>
        </React.Fragment>
    )
}

export default Issue;   