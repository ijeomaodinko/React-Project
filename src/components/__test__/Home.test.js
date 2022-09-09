import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('To test for the home page', () => {
  it('to match the dom snapshot', () => {
    const { tree } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
