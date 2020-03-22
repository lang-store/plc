import React, { ComponentType } from 'react';
import ReactDOM from 'react-dom';


import Form from './form';

function render(Component: ComponentType<{}>) {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
}

render(Form);

if (module.hot) {
  module.hot.accept(['./form'], () => render(require('./form').default));
}
