import React from 'react'
import { JokesConsumer } from '../store';

const Search = (props) => {
    return (
        <JokesConsumer>
            {value => {
                console.log('bb', value.dispatch)
                return (
                    <React.Fragment>
                        <label htmlFor="search">Enter Joke Number here</label>
                        <input
                            type="search"
                            name="search"
                            placeholder="ex. 1"
                            onChange={props.handleChange}
                        />
                        <button type="button" onClick={props.handleSubmit()}>Search</button>
                    </React.Fragment>

                )
            }}

        </JokesConsumer>

    )
}

export default Search;