import React from 'react';

class ResultComponent extends React.Component {
  render() {
    return (
      <div className="card card-block">
        <h3 className="card-title">Result</h3>
        <pre className="card-text">
          {this.props.output}
        </pre>
      </div>
    )
  }
}

export default ResultComponent;