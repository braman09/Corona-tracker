import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function WeeklyTrackerDay(props) {
    return (
        <Container>
            <Row xs={2} md={4} lg={6}>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row xs={1} md={2}>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}
export default WeeklyTrackerDay;