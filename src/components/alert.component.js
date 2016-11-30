import React from 'react';

class AlertComponent extends React.Component {
  render() {
    if (this.props.error.length > 0) {
      return <header className="alert alert-danger">{this.props.error}</header>;
    }
    return null;
  }
}

export default AlertComponent;