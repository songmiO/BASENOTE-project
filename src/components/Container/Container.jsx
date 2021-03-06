import React, { Component } from 'react';
import './Container.scss';

class Container extends Component {
  render() {
    const { children, option } = this.props;

    return <div className={`container ${option || ''}`}>{children}</div>;
  }
}

export default Container;
