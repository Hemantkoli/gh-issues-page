import React, { useState } from 'react'
import './App.scss'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect } from 'react';


//API
import { getIssues } from '../api/api'
import Issues from './Issues/Issues'
import Spinner from './Spinner/Spinner'
import Pagination from './Pagination/Pagination'
import Issue from './Issues/Issue'

const App=()=>{
    const [issues,setIssues]=useState([])
    const [isLoading,setLoading]=useState(false)
    const [currentPage,setCurrentPage]=useState(1)
    const [issuesPerPage]=useState(10)

    useEffect(()=>{
      setLoading(false)
      getIssues().then(res=>{
        setIssues(res)
        setLoading(false)
      })
    },[]);

    //get current issues
    const indexOfLastIssue=currentPage*issuesPerPage;
    const indexOfFirstIssue=indexOfLastIssue-issuesPerPage;
    const currentIssues=issues.slice(indexOfFirstIssue,indexOfLastIssue)

    //change page
    const paginate=pageNumber=>setCurrentPage(pageNumber)

    if(isLoading)
    {
      return <Spinner/>
    }
    return(
      <div className="App">
        <Router basename='/'>
            <Switch>
              <Route exact path='/'>
                <h1>Simplified Version of Github issues page</h1>
                <Issues issues={currentIssues}/>
                <Pagination issuesPerPage={issuesPerPage} totalIssues={issues.length} paginate={paginate} currentPage={currentPage}/> 
              </Route>
              <Route path='/issue/:id' component={Issue} />
            </Switch>
        </Router>
      </div>
    )
};

export default App;
