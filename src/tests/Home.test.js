import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import coinsStore from '../redux/configureStore';
import Home from '../components/Home';

test('Home test', async () => {
  const home = render(
    <React.StrictMode>
      <Provider store={coinsStore}>
        <Router>
          <Home />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(home).toMatchSnapshot();
});
