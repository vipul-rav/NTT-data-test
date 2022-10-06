import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '../../../setupTests';
import { ErrorComponent } from '../ErrorComponent';

const setup = (overridesProps) => {
  const props = {
    ...overridesProps
  };

  const ThrowError = () => {
    throw new Error('Test');
  };

  const Child = () => (props.isError ? <ThrowError /> : <div>Child</div>);

  const { container, getByText } = render(
    <ErrorComponent>
      <Child />
    </ErrorComponent>
  );

  return {
    props,
    container,
    getByText
  };
};

describe('ErrorComponent', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
  it('should render with Error', () => {
    const { container } = setup({ isError: true });

    expect(container).toMatchSnapshot();
  });
});
