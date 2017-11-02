import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as ReactHotLoaderContainer } from 'react-hot-loader';
import './index.css';
import App from './scenes/AppContainer';
import registerServiceWorker from './registerServiceWorker';

const render = AppComponent => {
  ReactDOM.render(
    <ReactHotLoaderContainer>
      <AppComponent />
    </ReactHotLoaderContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./scenes/AppContainer', () => {
    render(App);
  });
}

registerServiceWorker();
