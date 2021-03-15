import React from "react";
import { Row, Col } from "antd";
import PlaceDataTable from "./PlaceData";
import PlaceEdit from "./PlaceEdit";
function PlaceList({
  PlaceData,
  SelectedRecord,
  onSelectedRecord = { onSelectedRecord },
  CloseEvent = { CloseEvent },
  InputData = { InputData },
  onSaveEvent = { onSaveEvent },
}) {
  const Hading = PlaceData[0] && Object.keys(PlaceData[0]);

  return (
    <div>
      <Row>
        <Col span={1}>{PlaceData[0] && Hading[0]}</Col>
        <Col span={3}>{PlaceData[0] && Hading[1]}</Col>
        <Col span={5}>{PlaceData[0] && Hading[2]}</Col>
        <Col span={3}>{PlaceData[0] && Hading[3]}</Col>
        <Col span={3}>{PlaceData[0] && Hading[4]}</Col>
        <Col span={3}>{PlaceData[0] && Hading[5]}</Col>
      </Row>
      {PlaceData &&
        PlaceData.map((Place, index) => {
          if (SelectedRecord && SelectedRecord.id == Place.id) {
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
              <PlaceDataTable
                Place={Place}
                key={index}
                onSelectedRecord={onSelectedRecord}
              />
            );
          }
        })}
    </div>
  );
}

export default PlaceList;
