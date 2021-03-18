import React, { useState } from "react";
import { Row, Col, List, Table, Modal, Popconfirm, Tooltip } from "antd";
import PlaceDataTable from "./PlaceData";
import PlaceEdit from "./PlaceEdit";
function PlaceList({
  PlaceData,
  SelectedRecord,
  onSelectedRecord = { onSelectedRecord },
  CloseEvent = { CloseEvent },
  InputData = { InputData },
  onSaveEvent = { onSaveEvent },
  DeleteRecord = { DeleteRecord },
}) {
  const Hading = PlaceData[0] && Object.keys(PlaceData[0]);
  const [SelectedRecordData, setSelectedRecordData] = useState({});

  // const edit = (record) => {
  //   console.log(record);
  // };

  // const Deleted = (val) => {
  //   console.log(val);
  // };
  // const columns = [
  //   {
  //     title: "ID",
  //     dataIndex: "id",
  //   },
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //   },
  //   {
  //     title: "address",
  //     dataIndex: "address",
  //   },
  //   {
  //     title: "VisitingFrom",
  //     dataIndex: "VisitingFrom",
  //   },
  //   {
  //     title: "VisitingTo",
  //     dataIndex: "VisitingTo",
  //   },
  //   {
  //     title: "OpenForVisit",
  //     dataIndex: "OpenForVisit",
  //   },
  //   {
  //     key: "operation",
  //     fixed: "right",
  //     width: 100,
  //     render: (_, record) => (
  //       <div>
  //         <a onClick={() => Deleted(record)}>Delete</a>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "operation",
  //     fixed: "right",
  //     width: 100,
  //     render: (_, record) => (
  //       <div>
  //         <a onClick={() => edit(record)}>Edit</a>
  //       </div>
  //     ),
  //   },
  // ];

  const confirm = () => {
    DeleteRecord(SelectedRecordData);
  };

  return (
    <div>
      <List
        header={
          <Row>
            <Col span={1}>
              <h3>{PlaceData[0] && Hading[0]}</h3>
            </Col>
            <Col span={2}>
              <h3>{PlaceData[0] && Hading[1]}</h3>
            </Col>
            <Col span={3}>
              <h3>{PlaceData[0] && Hading[2]}</h3>
            </Col>
            <Col span={2}>
              <h3>{PlaceData[0] && Hading[3]}</h3>
            </Col>
            <Col span={2}>
              <h3>{PlaceData[0] && Hading[4]}</h3>
            </Col>
            <Col span={2}>
              <h3>{PlaceData[0] && Hading[5]}</h3>
            </Col>
          </Row>
        }
        bordered
        dataSource={PlaceData}
        renderItem={(item) => (
          <Row>
            <Col span={1}>
              <List.Item>{item.id}</List.Item>
            </Col>
            <Col span={2}>
              <List.Item>{item.name}</List.Item>
            </Col>
            <Col span={3}>
              <List.Item>{item.address}</List.Item>
            </Col>
            <Col span={2}>
              <List.Item>{item.VisitingFrom}</List.Item>
            </Col>
            <Col span={2}>
              <List.Item>{item.VisitingTo}</List.Item>
            </Col>
            <Col span={2}>
              <List.Item>{item.OpenForVisit}</List.Item>
            </Col>
            <Col>
              <List.Item>
                <Tooltip placement="topRight" title={"Delete Buton"}>
                  <Popconfirm
                    title="Sure to want to delete?"
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                  >
                    <button onClick={() => setSelectedRecordData(item)}>
                      Delete
                    </button>
                  </Popconfirm>
                </Tooltip>
              </List.Item>
            </Col>
          </Row>
        )}
      />

      {/* <Row>
        <Col span={1}>
          <List size="large" bordered>
            <List.Item>{PlaceData[0] && Hading[0]}</List.Item>
          </List>
        </Col>
        <Col span={3}>
          <List size="large" bordered>
            <List.Item>{PlaceData[0] && Hading[1]}</List.Item>
          </List>
        </Col>
        <Col span={5}>
          <List size="large" bordered>
            <List.Item>{PlaceData[0] && Hading[2]}</List.Item>
          </List>
        </Col>
        <Col span={3}>
          <List size="large" bordered>
            <List.Item>{PlaceData[0] && Hading[3]}</List.Item>
          </List>
        </Col>
        <Col span={3}>
          <List size="large" bordered>
            <List.Item>{PlaceData[0] && Hading[4]}</List.Item>
          </List>
        </Col>
        <Col span={3}>
          <List size="large" bordered>
            <List.Item>{PlaceData[0] && Hading[5]}</List.Item>
          </List>
        </Col>
      </Row> */}
      {/* <Table dataSource={PlaceData} columns={columns} /> */}

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
