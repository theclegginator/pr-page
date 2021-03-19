import { useState } from 'react'

const Search = ({ handleSearch }) => {
    return (
        <div>
            Search Pull Requests: 
            <input
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                name="search"
                type="text"
                className="search-bar"
            />
        </div>
    )
}

export default Search;