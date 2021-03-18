import React, { useState } from "react";
import { Row, Col, Button, Input, Radio, DatePicker, List } from "antd";
import moment from "moment";

function PlaceEdit({
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
        <List size="large" bordered>
          <List.Item>{data.id}</List.Item>
        </List>
      </Col>
      <Col span={3}>
        <List size="large" bordered>
          <List.Item>
            <Input value={data.name} name="name" onChange={InputEventHandler} />
          </List.Item>
        </List>
      </Col>
      <Col span={5}>
        <List size="large" bordered>
          <List.Item>
            <Input
              value={data.address}
              name="address"
              onChange={InputEventHandler}
            />
          </List.Item>
        </List>
      </Col>
      <Col span={3}>
        <List size="large" bordered>
          <List.Item>
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={(date, dateString) =>
                InputEventHandler({
                  target: { name: "VisitingFrom", value: dateString },
                })
              }
              defaultValue={moment(data.VisitingFrom, "DD/MM/YYYY")}
            />
          </List.Item>
        </List>
      </Col>
      <Col span={3}>
        <List size="large" bordered>
          <List.Item>
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={(date, dateString) =>
                InputEventHandler({
                  target: { name: "VisitingTo", value: dateString },
                })
              }
              defaultValue={moment(data.VisitingTo, "DD/MM/YYYY")}
            />
          </List.Item>
        </List>
      </Col>
      <Col span={3}>
        <List size="large" bordered>
          <List.Item>
            <Radio.Group
              defaultValue={data.OpenForVisit}
              name="OpenForVisit"
              onChange={InputEventHandler}
            >
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </Radio.Group>
          </List.Item>
        </List>
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

export default PlaceEdit;
