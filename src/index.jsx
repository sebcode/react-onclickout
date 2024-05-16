'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class ClickOutComponent extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
  }

  toggleListeners(listenerMethod) {
  }

  componentWillUnmount() {
    this.toggleListeners('removeEventListener');
    this.__unmounted = true;
  }

  render() {
    return Array.isArray(this.props.children) ?
      <div>{this.props.children}</div> :
      React.Children.only(this.props.children);
  }
}

module.exports = ClickOutComponent
