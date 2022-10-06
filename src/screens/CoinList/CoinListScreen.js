import React, { memo, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { CoinListTable } from './CoinListTable';
import { LoaderComponent } from '../../components/Loader';
import { API_BASE_URL } from '../../constant/stringConstant';

const CoinListScreen = memo(() => {
  const [coinList, updateCoinList] = useState([]);
  //show loader- loader can handle with middleware and redux globally in App
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    //call coin List API.
    const getCoinList = async () => {
      try {
        const result = await fetch(
          `${API_BASE_URL}/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false`
        );
        const response = await result.json();
        updateCoinList(response);
        updateLoading(false);
      } catch (e) {
        updateLoading(false);
      }
    };
    getCoinList();
  }, []);

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <Container>
      <Row>
        <Col>
          <strong>Coin List</strong>
        </Col>
      </Row>
      <Row>
        <Col>
          {coinList.error ? <Alert variant="danger">{coinList.error}</Alert> : <CoinListTable coinList={coinList} />}
        </Col>
      </Row>
    </Container>
  );
});

export { CoinListScreen };
