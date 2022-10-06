import React from 'react';
import { waitForElementToBeRemoved, cleanup } from '@testing-library/react';
import { render } from '../../../setupTests';
import { CoinDetailsScreen } from '../CoinDetailsScreen';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'bitcoin'
  })
}));

const setup = (overridesProps) => {
  const props = {
    ...overridesProps
  };

  const { container, getByText } = render(<CoinDetailsScreen {...props} />);

  return {
    props,
    container,
    getByText
  };
};

describe('CoinDetailsScreen', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
  it('should render- API call', async () => {
    const { container, getByText } = setup();

    await waitForElementToBeRemoved(() => getByText('Please Wait...'));

    expect(container).toMatchSnapshot();
  });
});
