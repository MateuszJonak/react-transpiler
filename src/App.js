import React, { Component } from 'react';
import './App.css';
import AlertComponent from './components/alert.component';
import CodeComponent from './components/code.component';
import ResultComponent from './components/result.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: '',
      error: ''
    };
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
          .transform(code, {presets: ['es2015', 'react']})
          .code,
        error: ''
      })
    } catch(error) {
      this.setState({error: error.message})
    }
  }
  render() {
    return (
      <div className="container">
        <AlertComponent error={this.state.error} />
        <div className="row">
          <div className="col-xs-4">
            <CodeComponent update={this.update.bind(this)} input={this.state.input} />
          </div>
          <div className="col-xs-8">
            <ResultComponent output={this.state.output}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
