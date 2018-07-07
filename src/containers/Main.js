import React from 'react';
import { Container, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import Suggestion from '../components/Sugestion';
import logo from '../logo.svg';
import Data from '../constants/data';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  // const regex = new RegExp(inputValue, "i");

  return inputLength === 0 ? [] : Data.filter(obj => {
    return levenshtein(inputValue, obj.name) < 3;
  });
};

// Levenshtein distance between two given strings
const levenshtein = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  var matrix = [];

  // increment along the first column of each row
  var i;
  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
          Math.min(matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1)); // deletion
      }
    }
  }
  return matrix[b.length][a.length];
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