import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Results from './components/results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        results: []
    };
  }

handleResults = results => {
    this.setState({ results });
}

render() {
    return (
        <div>
            <header>
                <h2>Fibonacci</h2>
            </header>
            <main>
                <Form handleResults={this.handleResults} />
                <Results results={this.state.results} />
            </main>
        </div >
    );
}
}

export default App;
