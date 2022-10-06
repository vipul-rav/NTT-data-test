import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const CoinListTable = memo(({ coinList }) => {
  const renderRow = ({ id, image, name, symbol, current_price, high_24h, low_24h }) => {
    return (
      <tr key={id}>
        <td>
          <img src={image} alt={name} width={24} height={24} />
        </td>
        <td>
          <Link to={`/coin-details/${id}`}>{name}</Link>
        </td>
        <td>
          <Link to={`/coin-details/${id}`}>{symbol}</Link>
        </td>
        <td>
          <Link to={`/coin-details/${id}`}>{current_price}</Link>
        </td>
        <td>
          <Link to={`/coin-details/${id}`}>{high_24h}</Link>
        </td>
        <td>
          <Link to={`/coin-details/${id}`}>{low_24h}</Link>
        </td>
      </tr>
    );
  };

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>High Price</th>
          <th>Low Price</th>
        </tr>
      </thead>
      <tbody>{coinList.map((coinItem) => renderRow(coinItem))}</tbody>
    </Table>
  );
});

export { CoinListTable };
