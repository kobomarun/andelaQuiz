import React from 'react';


const JokesContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_JOKES':
            return {
                ...state,
                jokes: action.payload
            };
            break;
    }
}
class Store extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jokes: [],
            dispatch: action => this.setState(state => {
                return (
                    reducer(state, action)
                )
            })
        }
    }


    render() {
        console.log('from store', this.state.jokes)
        return (
            <JokesContext.Provider value={this.state}>

                {this.props.children}

            </JokesContext.Provider>

        )
    }
}

const JokesConsumer = JokesContext.Consumer

export { Store, JokesConsumer };
