import React from "react";
import { Row, Col, Button } from "antd";
function PlaceData({ Place, onSelectedRecord = { onSelectedRecord } }) {
  return (
    <div>
      <Row>
        <Col span={1}>{Place.id}</Col>
        <Col span={3}>{Place.name}</Col>
        <Col span={5}>{Place.address}</Col>
        <Col span={3}>{Place.VisitingFrom}</Col>
        <Col span={3}>{Place.VisitingTo}</Col>
        <Col span={3}>{Place.OpenForVisit}</Col>
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
