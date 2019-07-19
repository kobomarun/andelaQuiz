import React from 'react';

import Search from './component/Search'

const Provider = React.createContext;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      jokes: []
    }

    this.fetchJokes = this.fetchJokes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random/2')
      .then(response => response.json())
      .then(response => this.fetchJokes(response))
      .catch(error => console.log(error))
  }

  fetchJokes(response) {
    this.setState({
      jokes: response
    })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })

    console.log(this.state.search)
  }

  handleSubmit() {
    console.log('click')
  }

  render() {
    return (
      <React.Fragment>
        <Provider value={this.state.value}>
          <Search
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Provider>

      </React.Fragment>
    )
  }
}


export default App;
