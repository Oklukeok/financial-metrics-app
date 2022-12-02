import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import coinsStore from '../Redux/configureStore';
import '@testing-library/jest-dom';

describe('Test for Navbar component', () => {
  test('Renders Navbar correctly', () => {
    const navbar = render(
      <Provider store={coinsStore}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
