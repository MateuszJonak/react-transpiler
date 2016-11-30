import React from 'react';

class CodeComponent extends React.Component {
  render() {
    return (
      <div className="form-group">
        <div className="card card-block">
          <h3 className="card-title">Code</h3>
          <textarea
            className="form-control"
            onChange={this.props.update}
            defaultValue={this.props.input}/>
        </div>
      </div>
    )
  }
}

export default CodeComponent;