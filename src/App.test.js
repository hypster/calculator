import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Calculator from './features/Calculator/Calculator';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Calculator />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
