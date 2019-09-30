import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import configureStore, { history } from './redux/sotre';
import RTL from './app/RTL';

const store = configureStore();

const rootEl = document.getElementById('octopus-app');

const theme = createMuiTheme({
  direction: 'rtl'
});

const render = () => {
  const App = require('./App').default;

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RTL>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </RTL>
      </Provider>
    </ThemeProvider>,
    rootEl
  );
};

render();
