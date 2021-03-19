import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, updatePage }) => {
    const pageNumbers = [];

    // Find total number of pages to create from available data.
    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return ( 
        <div> 
            <p>Page: </p>
            {pageNumbers.map(i => (
                <a href="!#" className="page-num" onClick={() => {updatePage(i)}}> {i} </a>
            ))}
        </div>
    )
}

export default Pagination
