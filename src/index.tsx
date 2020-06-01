import React, { ComponentType } from 'react';
import ReactDOM from 'react-dom';


import StartPage from './pages/start-page';

function render(Component: ComponentType<{}>) {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
}

render(StartPage);

if (module.hot) {
  module.hot.accept(['./components/main'], () => render(require('./components/main').default));
}
