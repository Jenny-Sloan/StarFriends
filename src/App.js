import React, { Component } from 'react';
import List from "./List.jsx"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    }

    this.baseURL = "http://swapi.co/api"
    this.proxyURL = "https://cors-anywhere.herokuapp.com/"

    this.getPeople = this.getPeople.bind(this)
  }

  getPeople() {
    fetch(`${this.proxyURL}${this.baseURL}/people`, {
      method: "GET",
      headers: {
        'content-type': "Application/JSON"
      }
    })
      .then((result) => {
        return result.json()
      })

      .then((apiPeople) => {
        //console.log(apiPeople)
        this.setState({ people: apiPeople.results })
      })

  }

  componentDidMount() {
    this.getPeople()
  }
  render() {
    const people = this.state.people 
    return (

      <div className="App">
        <List people = {people}/>
      </div>
    );
  }
}

export default App;
