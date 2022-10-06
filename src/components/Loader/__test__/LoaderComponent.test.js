import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '../../../setupTests';
import { LoaderComponent } from '../LoaderComponent';

const setup = (overridesProps) => {
  const props = {
    ...overridesProps
  };

  const { container, getByText } = render(<LoaderComponent {...props} />);

  return {
    props,
    container,
    getByText
  };
};

describe('LoaderComponent', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
