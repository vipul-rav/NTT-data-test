import React, { memo, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Pagination from 'react-bootstrap/Pagination';
import { CoinListTable } from './CoinListTable';
import { LoaderComponent } from '../../components/Loader';
import { API_BASE_URL } from '../../constant/stringConstant';

const CoinListScreen = memo(() => {
  const [coinList, updateCoinList] = useState([]);
  const [activePage, updateActivePage] = useState(1);
  //show loader- loader can handle with middleware and redux globally in App
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    //call coin List API.
    const getCoinList = async () => {
      try {
        const result = await fetch(
          `${API_BASE_URL}/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=${activePage}&sparkline=false`
        );
        const response = await result.json();
        updateCoinList(response);
        updateLoading(false);
      } catch (e) {
        updateLoading(false);
      }
    };
    getCoinList();
    return () => {};
  }, [activePage]);

  const pageChanged = (page) => {
    const nextPage = activePage + page;
    //no pagination will change if page is less than 0. No Max page size availbele hence keep it as is
    nextPage > 0 && updateActivePage(nextPage);
  };

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
      <Row>
        <Col>
          <Pagination>
            <Pagination.Item onClick={() => pageChanged(-1)}>Prev</Pagination.Item>
            <Pagination.Item onClick={() => pageChanged(1)}>Next</Pagination.Item>
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
});

export { CoinListScreen };
