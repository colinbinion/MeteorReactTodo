import React, { Component } from 'react';
import PropTypes from 'prop-types';

//represents a single todo item - task Component
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.propTypes = {
  //this displays the task component via a react prop. use PropTypes to indicate it is required.
  task: PropTypes.object.isRequired,
};
