import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '../../../setupTests';
import { FormLabelGroupComponent } from '../FormLabelGroupComponent';

const setup = (overridesProps) => {
  const props = {
    label: 'test',
    value: 'test',
    ...overridesProps
  };

  const { container, getByText } = render(<FormLabelGroupComponent {...props} />);

  return {
    props,
    container,
    getByText
  };
};

describe('FormLabelGroupComponent', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
