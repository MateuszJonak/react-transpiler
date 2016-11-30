import React, { Component } from 'react';
import './App.css';

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
        { this.state.error.length > 0 ? <header className="alert alert-danger">{this.state.error}</header> : null}
        <div className="row">
          <div className="col-xs-3">
            <div className="form-group">
              <div className="card card-block">
                <h3 className="card-title">Code</h3>
                <textarea
                  className="form-control"
                  onChange={this.update.bind(this)}
                  defaultValue={this.state.input}/>
              </div>
            </div>
          </div>
          <div className="col-xs-9">
            <div className="card card-block">
              <h3 className="card-title">Result</h3>
              <pre className="card-text">
                {this.state.output}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
