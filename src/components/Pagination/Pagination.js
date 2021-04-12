import React from 'react'
import './Pagination.scss'

const Pagination= ({issuesPerPage,totalIssues,paginate,currentPage}) =>{

    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalIssues/issuesPerPage);i++)
    {
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number=>{
                        return(
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`} onClick={()=>paginate(number)}>
                            <span className="page-link">{number}</span>
                        </li>
                        );
                    })}
            </ul>
        </nav>
    );
};

export default Pagination;