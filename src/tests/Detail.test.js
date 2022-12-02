import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import coinsStore from '../redux/configureStore';
import Detail from '../components/Detail';

describe('Details test', () => {
  test('snapshot for details', () => {
    const history = createBrowserHistory();
    const image = {
      id: '-1',
      author: 'Marcos Gualtero Lourenzo',
      width: 5616,
      height: 3744,
      url: './__snapshots__/testingImage.jpg',
      downloadUrl: './__snapshots__/testingImage.jpg',
      picsumUrl: './__snapshots__/testingImage.jpg',
      nosizeUrl: './__snapshots__/testingImage.jpg',
      blurUrl: './__snapshots__/testingImage.jpg',
      grayUrl: './__snapshots__/testingImage.jpg',
      grayBlurUrl: './__snapshots__/testingImage.jpg',
    };

    history.push('/imagedetail', { image });
    const tree = render(
      <React.StrictMode>
        <Provider store={coinsStore}>
          <Router history={history}>
            <Routes>
              <Route path="detail" element={<Detail />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
