import React, { memo, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { LoaderComponent } from '../../components/Loader';

import { FormLabelGroupComponent } from '../../components/FormLabelGroup';
import { API_BASE_URL } from '../../constant/stringConstant';

const CoinDetailsScreen = memo(() => {
  const [coinDetails, updateCoinDetails] = useState(null);
  //show loader- loader can handle with middleware and redux globally in App
  const [loading, updateLoading] = useState(true);
  //read coin id to get details
  const { id } = useParams();

  useEffect(() => {
    const getCoinDetails = async () => {
      try {
        const result = await fetch(`${API_BASE_URL}api/v3/coins/${id}?localization=false`);
        const response = await result.json();
        updateCoinDetails(response);
        updateLoading(false);
      } catch (e) {
        updateLoading(false);
      }
    };
    getCoinDetails();
  }, [id]);

  if (loading) {
    return <LoaderComponent />;
  }

  const { name, symbol, hashing_algorithm, description, market_data, links, genesis_date, error } = coinDetails;

  return (
    <Container>
      <Row>
        <Col>
          <Link to="/">Back</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <strong>Coin Details</strong>
        </Col>
      </Row>
      <Row>
        <Col>
          {error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <Form>
              <FormLabelGroupComponent label="Name" value={name} />
              <FormLabelGroupComponent label="Symbol" value={symbol} />
              <FormLabelGroupComponent label="Hashing Alogorithm" value={hashing_algorithm} />
              <FormLabelGroupComponent label="Description" value={description?.en} />
              <FormLabelGroupComponent label="Market Cap" value={market_data?.market_cap?.eur} />
              <FormLabelGroupComponent label="Homepage" value={links?.homepage} />
              <FormLabelGroupComponent label="Genesis Date" value={genesis_date} />
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
});

export { CoinDetailsScreen };
