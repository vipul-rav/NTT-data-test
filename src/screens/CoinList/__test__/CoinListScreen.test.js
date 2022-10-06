import React from 'react';
import { waitForElementToBeRemoved, waitForElement, cleanup, fireEvent } from '@testing-library/react';
import { render } from '../../../setupTests';
import { CoinListScreen } from '../CoinListScreen';

const setup = (overridesProps) => {
  const props = {
    ...overridesProps
  };

  const { container, getByText } = render(<CoinListScreen {...props} />);

  return {
    props,
    container,
    getByText
  };
};

describe('CoinListScreen', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
  it('should render', async () => {
    const { container, getByText } = setup();
    const res = await waitForElementToBeRemoved(() => getByText('Please Wait...'));

    expect(container).toMatchSnapshot();
  });
  it('Click Prev button', async () => {
    const { getByText } = setup();
    const res = await waitForElementToBeRemoved(() => getByText('Please Wait...'));
    const btn = getByText('Prev');
    fireEvent.click(btn, -1);
  });
  it('click Prev button for negative value', async () => {
    const { getByText } = setup();
    const res = await waitForElementToBeRemoved(() => getByText('Please Wait...'));
    const btn = getByText('Prev');
    fireEvent.click(btn, -2);
  });
  it('CLick Next button', async () => {
    const { getByText } = setup();
    const res = await waitForElementToBeRemoved(() => getByText('Please Wait...'));
    const btn = getByText('Next');
    fireEvent.click(btn, 1);
  });
});
