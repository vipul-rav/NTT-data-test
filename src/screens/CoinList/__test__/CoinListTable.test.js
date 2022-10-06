import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import { render } from '../../../setupTests';
import { CoinListTable } from '../CoinListTable';

const setup = (overridesProps) => {
  const props = {
    coinList: [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        current_price: 20451,
        market_cap: 392293563216,
        market_cap_rank: 1,
        fully_diluted_valuation: 429717070382,
        total_volume: 33226948208,
        high_24h: 20602,
        low_24h: 20217,
        price_change_24h: 224.35,
        price_change_percentage_24h: 1.1092,
        market_cap_change_24h: 4450688360,
        market_cap_change_percentage_24h: 1.14755,
        circulating_supply: 19171137.0,
        total_supply: 21000000.0,
        max_supply: 21000000.0,
        ath: 59717,
        ath_change_percentage: -65.77008,
        ath_date: '2021-11-10T14:24:11.849Z',
        atl: 51.3,
        atl_change_percentage: 39747.28883,
        atl_date: '2013-07-05T00:00:00.000Z',
        roi: null,
        last_updated: '2022-10-06T15:32:12.324Z'
      },
      {
        id: 'ethereum',
        symbol: 'eth',
        name: 'Ethereum',
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
        current_price: 1389.97,
        market_cap: 168175304251,
        market_cap_rank: 2,
        fully_diluted_valuation: null,
        total_volume: 11145693952,
        high_24h: 1399.7,
        low_24h: 1346.11,
        price_change_24h: 43.75,
        price_change_percentage_24h: 3.25016,
        market_cap_change_24h: 5781002735,
        market_cap_change_percentage_24h: 3.55986,
        circulating_supply: 120836915.491245,
        total_supply: 120836121.491245,
        max_supply: null,
        ath: 4228.93,
        ath_change_percentage: -67.10694,
        ath_date: '2021-12-01T08:38:24.623Z',
        atl: 0.381455,
        atl_change_percentage: 364562.43231,
        atl_date: '2015-10-20T00:00:00.000Z',
        roi: { times: 89.89358710846096, currency: 'btc', percentage: 8989.358710846096 },
        last_updated: '2022-10-06T15:32:01.895Z'
      },
      {
        id: 'tether',
        symbol: 'usdt',
        name: 'Tether',
        image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
        current_price: 1.018,
        market_cap: 69471582650,
        market_cap_rank: 3,
        fully_diluted_valuation: null,
        total_volume: 38427336072,
        high_24h: 1.023,
        low_24h: 1.007,
        price_change_24h: 0.00299639,
        price_change_percentage_24h: 0.29532,
        market_cap_change_24h: 407953128,
        market_cap_change_percentage_24h: 0.59069,
        circulating_supply: 68212574445.5576,
        total_supply: 68212574445.5576,
        max_supply: null,
        ath: 1.13,
        ath_change_percentage: -9.95533,
        ath_date: '2018-07-24T00:00:00.000Z',
        atl: 0.533096,
        atl_change_percentage: 91.13743,
        atl_date: '2015-03-02T00:00:00.000Z',
        roi: null,
        last_updated: '2022-10-06T15:31:38.050Z'
      },
      {
        id: 'binancecoin',
        symbol: 'bnb',
        name: 'BNB',
        image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
        current_price: 299.3,
        market_cap: 48887835179,
        market_cap_rank: 4,
        fully_diluted_valuation: 49438697443,
        total_volume: 470667079,
        high_24h: 300.34,
        low_24h: 295.8,
        price_change_24h: 3.5,
        price_change_percentage_24h: 1.18238,
        market_cap_change_24h: 572770875,
        market_cap_change_percentage_24h: 1.18549,
        circulating_supply: 163276974.63,
        total_supply: 163276974.63,
        max_supply: 165116760.0,
        ath: 583.17,
        ath_change_percentage: -48.63995,
        ath_date: '2021-11-26T02:58:28.000Z',
        atl: 0.03359941,
        atl_change_percentage: 891339.51041,
        atl_date: '2017-10-19T00:00:00.000Z',
        roi: null,
        last_updated: '2022-10-06T15:31:28.041Z'
      }
    ],
    ...overridesProps
  };

  const { container, getByText } = render(<CoinListTable {...props} />);

  return {
    props,
    container,
    getByText
  };
};

describe('CoinListTable', () => {
  afterEach(cleanup);
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
