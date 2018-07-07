import React from 'react';
import { Container, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import Suggestion from '../components/Sugestion';
import logo from '../logo.svg';
import Data from '../constants/data';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  const regex = new RegExp('[' + value + ']', 'i');
  console.log(regex)
  return inputLength === 0 ? [] : Data.filter(obj =>
    regex.test(obj.name)
  );
};

export default class Main extends React.Component {

  state = {
    value: '',
    suggestions: []
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
      suggestions: getSuggestions(e.target.value)
    });
  };

  render() {
    const { value, suggestions } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <Container>
          <Label for="seach"></Label>
          <Input type="text" name="seach" id="seach" placeholder="Search..." onChange={this.onChange} value={value} />
          <br />
          <ListGroup>
            {suggestions.map((suggestion, i) => <ListGroupItem key={i}><Suggestion {...suggestion} /></ListGroupItem>)}
          </ListGroup>
        </ Container>
      </div>
    );
  }
}