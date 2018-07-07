import React from 'react';
import queryString from 'query-string'
import { Container } from 'reactstrap';

export default class Detail extends React.Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <h1 className="App-title">Hey {queryString.parse(this.props.location.search).n}</h1>
                </ Container>
            </div>
        );
    }
}