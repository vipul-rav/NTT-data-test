import React, { memo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const FormLabelGroupComponent = memo(({ label, value }) => {
  return (
    <Row>
      <Form.Label column sm={2}>
        <storng>{label}</storng>
      </Form.Label>
      <Col>
        <Form.Label column sm={10}>
          {value}
        </Form.Label>
      </Col>
    </Row>
  );
});

export { FormLabelGroupComponent };
