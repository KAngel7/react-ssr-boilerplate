import React from 'react';
import { render } from '@testing-library/react';

import Home from '../Home';
import { ServerDataProvider } from '../../state/serverDataContext';

describe('<Home />', () => {
  it('renders Home title', () => {
    const { container } = render(
      <ServerDataProvider>
        <Home />
      </ServerDataProvider>
    );

    expect(container.querySelector('h1').textContent).toEqual('Weather today');
  });
});
