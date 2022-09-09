import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import NavBar from '../NavBar';

describe('To test for the home page', () => {
  it('to match the dom snapshot', () => {
    const { tree } = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
