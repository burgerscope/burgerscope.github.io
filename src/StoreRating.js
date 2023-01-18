import React from "react";
import { Container, Row } from "react-bootstrap";

export default function StoreRating({ ranks }) {
  return (
    <Container fluid>
      <Row>
        <span>
          <b>E/G:</b> {ranks.eg}
        </span>
      </Row>
      <Row>
        <span>
          <b>C/L:</b> {ranks.cl}
        </span>
      </Row>
      <Row>
        <span>
          <b>Vibes:</b> {ranks.v}
        </span>
      </Row>
    </Container>
  );
}
