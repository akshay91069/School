import React from "react";
import { Row, Col } from "antd";
import TableData from "./TableData";
import TableEdit from "./TableEdit";
function TableList({ Data, onSelectHandler, Selected }) {
  const Hading = Data[0] && Object.keys(Data[0]);

  return (
    <>
      <Row>
        <Col span={1}>{Data[0] && Hading[0]}</Col>
        <Col span={3}>{Data[0] && Hading[1]}</Col>
        <Col span={5}>{Data[0] && Hading[2]}</Col>
        <Col span={3}>{Data[0] && Hading[3]}</Col>
        <Col span={3}>{Data[0] && Hading[4]}</Col>
        <Col span={3}>{Data[0] && Hading[5]}</Col>
      </Row>
      {Data &&
        Data.map((Place, index) => {
          if (Selected && Selected.id == Place.id) {
            return (
              <PlaceEdit
                key={index}
                data={SelectedRecord}
                CloseEvent={CloseEvent}
                InputData={InputData}
                onSaveEvent={onSaveEvent}
              />
            );
          } else {
            return (
              <TableData
                Place={Place}
                key={index}
                onSelectHandler={onSelectHandler}
              />
            );
          }
        })}
    </>
  );
}

export default TableList;
