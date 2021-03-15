import React from "react";
import { Row, Col, Button } from "antd";
function personDetails({
  data,
  sendDataToParent123,
  DeleteDataToParent,
  EditDataToParent,
  slectedrecod,
}) {
  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col span={3}>{person.name}</Col>
        <Col span={3}>{person.sername}</Col>
        <Col span={3}>{person.rollnum}</Col>
        <Col span={3}>{person.age}</Col>
        <Col span={4}>{person.add}</Col>
        <Col span={3}>{person.gender}</Col>

        <Col span={1}>
          <Button
            type="primary"
            onClick={() => {
              DeleteDataToParent(person);
            }}
          >
            Delete
          </Button>
        </Col>
        <Col span={1}>
          <Button
            type="primary"
            onClick={() => {
              EditDataToParent(person);
            }}
          >
            Edit
          </Button>
        </Col>
        <Col span={1}>
          <Button
            type="primary"
            onClick={() => {
              sendDataToParent123(person);
            }}
          >
            Select
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default personDetails;
