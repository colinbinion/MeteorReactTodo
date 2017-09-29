import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

//code loads components and renders them into render-target html element.
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
