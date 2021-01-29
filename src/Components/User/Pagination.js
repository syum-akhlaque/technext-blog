import React from 'react';

const Pagination = ({userPerPage, totalUser, paginate}) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalUser/ userPerPage); i++) {
        pageNumber.push(i)      
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map( number => 
                    <li key={number} className= 'page-item'>
                        <a onClick = {()=> paginate(number)} href="#!" className="page-link">
                            {number}
                        </a>
                    </li>
                    )}
            </ul>
        </nav>
    );
};

export default Pagination;