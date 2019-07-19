import React from 'react'

const Search = (props) => {
    return (
        <div>
            <label htmlFor="search">Enter Joke Number here</label>
            <input
                type="search"
                name="search"
                placeholder="ex. 1"
                onChange={props.handleChange}
            />
            <button type="button" onClick={props.handleSubmit}></button>
        </div>
    )
}

export default Search;