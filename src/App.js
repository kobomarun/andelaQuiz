import React from 'react';

import Search from './component/Search'




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })

    console.log(this.state.search)
  }

  handleSubmit(dispatch) {
    //alert('dddd')
    const number = this.state.search
    fetch('http://api.icndb.com/jokes/random/' + number)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: 'FETCH_JOKES',
          payload: response
        })
      })
      .catch(error => console.log(error))

  }


  render() {
    let Alljokes = this.state.jokes;


    return (
      <Search
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        value={this.fetchJokes}
      />
    )
  }
}


export default App;
