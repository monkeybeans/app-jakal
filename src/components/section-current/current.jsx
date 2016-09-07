import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddSuggestion from '../add-suggestion';
import VotingList from '../voting-list';

const Current = () => (
  <Row>
    <Col xs={12}>
      <VotingList />
    </Col>
    <Col xs={12}>
      <AddSuggestion />
    </Col>
  </Row>
);

export default Current;
