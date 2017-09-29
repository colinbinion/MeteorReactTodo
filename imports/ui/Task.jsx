import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';

//represents a single todo item - task Component
export default class Task extends Component {
  toggleChecked() {
    //sets the checked property to the opposite of current value
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    //define a different className for checked off items, allowing styling options in CSS
    const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
        &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}

Task.propTypes = {
  //this displays the task component via a react prop. use PropTypes to indicate it is required.
  task: PropTypes.object.isRequired,
};
