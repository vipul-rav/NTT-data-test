import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '../setupTests';
import { App } from '../App';

const setup = (overridesProps) => {
  const props = {
    ...overridesProps
  };

  const { container, getByText } = render(<App {...props} />);

  return {
    props,
    container,
    getByText
  };
};

describe('App', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
