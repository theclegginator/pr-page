import { useState } from 'react'

const Search = ({ searchValue }) => {
    return (
        <div>
            Search: 
            <input
                name="search"
                type="text"
            />
        </div>
    )
}

export default Search;