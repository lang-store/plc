import React, { ComponentType } from 'react';
import ReactDOM from 'react-dom';


import Main from './components/main';

function render(Component: ComponentType<{}>) {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
}

render(Main);

if (module.hot) {
  module.hot.accept(['./form'], () => render(require('./form').default));
}
