import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  // This and setState  is defined in react framework,
  state = {
    persons:[
      {name: 'John', age: 25},
      {name: 'Max', age: 28},
      {name: 'Albert', age: 32}
    ]
  }

  // This will only affect Persons, not any
  // other parameter in state. (In Hooks, all parameters have to be redefined.)
  switchHandler = (newName) => {
    this.setState({
      persons:[
        {name: 'John', age: 25},
        {name: newName, age: 28},
        {name: 'Albert', age: 35}
      ]
    })
  };

  changeNameHandler = (event) => {
    this.setState({
      persons:[
        {name: 'John', age: 25},
        {name: event.target.value , age: 28},
        {name: 'Albert', age: 35}
      ]
    })
  };

  render() {

    const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      marginTop: '5px'
    }
    return (
      // There should be one root element in JSX
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Person Cards</h1>
        </header>
        

        <button style ={style}
        onClick={() => this.switchHandler('MAXXX')}>Switch</button>

        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchHandler.bind(this, 'MAX')}
          changed = {this.changeNameHandler}/>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}>
        Hello Albert</Person>
      </div>
      // Alternate way real javascript way
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React'))
    );
  }
}

export default App;
