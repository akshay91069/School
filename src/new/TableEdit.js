import React, { useState } from "react";
import { Row, Col, Button, Input, Radio, DatePicker } from "antd";
function TableEdit({
  data,
  CloseEvent = { CloseEvent },
  InputData = { InputData },
  onSaveEvent = { onSaveEvent },
}) {
  const InputEventHandler = (e) => {
    InputData(e.target.name, e.target.value);
  };
  return (
    <Row>
      <Col span={1} className="editCol">
        <label>{data.id}</label>
      </Col>
      <Col span={3}>
        <Input value={data.name} name="name" onChange={InputEventHandler} />
      </Col>
      <Col span={5}>
        <Input
          value={data.address}
          name="address"
          onChange={InputEventHandler}
        />
      </Col>
      <Col span={3}>
        <Input
          value={data.VisitingFrom}
          name="VisitingForm"
          onChange={InputEventHandler}
        />
      </Col>
      <Col span={3}>
        <Input
          value={data.VisitingTo}
          name="VisitingTo"
          onChange={InputEventHandler}
        />
      </Col>
      <Col span={3}>
        <Radio.Group
          defaultValue={data.OpenForVisit}
          name="OpenForVisit"
          onChange={InputEventHandler}
        >
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      </Col>
      <Col span={4}>
        <Button
          onClick={() => {
            onSaveEvent(data);
          }}
        >
          Save
        </Button>
        <Button
          onClick={() => {
            CloseEvent();
          }}
        >
          Close
        </Button>
      </Col>
    </Row>
  );
}

export default TableEdit;
