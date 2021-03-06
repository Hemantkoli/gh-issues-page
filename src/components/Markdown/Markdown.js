import React,{useState,useEffect} from 'react'
import { render } from 'react-dom'
import ReactMarkDown from 'react-markdown'
import {fetchIssueReadme,renderIssueReadme} from '../../api/api'

const Markdown=props=>{
    const [issueMDURL,setIssueMDURL]=useState()
    const [issueMD,setIssueMD]=useState()

    useEffect(()=>{
        fetchIssueReadme(props.repoURL).then(res=>setIssueMDURL(res.data.download_url))

        if(issueMDURL){
            renderIssueReadme(issueMDURL).then(res => setIssueMD(res.data));
        }
    },[props.repoURL,issueMDURL]);
    return(
        <React.Fragment>
            <h5 style={{fontSize:'1.5rem'}}>MD of the repository</h5>
            <ReactMarkDown source={issueMD} escapeHtml={true} className="issueMD"></ReactMarkDown>
        </React.Fragment>
    );
};

export default Markdown;