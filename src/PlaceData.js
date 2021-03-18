import React from "react";
import { Row, Col, Button, List, Card, Table } from "antd";
function PlaceData({ Place, onSelectedRecord = { onSelectedRecord } }) {
  return (
    <div>
      <Row>
        <Col span={1}>
          <List size="large" bordered>
            <List.Item>{Place.id}</List.Item>
          </List>
        </Col>
        <Col span={3}>
          <List size="large" bordered>
            <List.Item>{Place.name}</List.Item>
          </List>
        </Col>
        <Col span={5}>
          <List size="large" bordered>
            <List.Item>{Place.address}</List.Item>
          </List>
        </Col>
        <Col span={3}>
          <List size="large" bordered>
            <List.Item>{Place.VisitingFrom}</List.Item>
          </List>
        </Col>
        <Col span={3}>
          <List size="large" bordered>
            <List.Item>{Place.VisitingTo}</List.Item>
          </List>
        </Col>
        <Col span={3}>
          <List size="large" bordered>
            <List.Item>{Place.OpenForVisit}</List.Item>
          </List>
        </Col>
        <Col span={4}>
          <Button>Delete</Button>
          <Button
            onClick={() => {
              onSelectedRecord(Place);
            }}
          >
            Edit
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default PlaceData;
