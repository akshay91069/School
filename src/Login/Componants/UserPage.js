import React, { useState, useEffect } from "react";
import { getPageData } from "../Api/Api";
import { Row, Col, List, Pagination, Avatar } from "antd";
import { Link } from "react-router-dom";

function UserPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [allUserData, setAllUserData] = useState();
  const [total, setTotal] = useState();
  const [PageSize, setPageSize] = useState();
  function onChange(pageNumber) {
    setPageNumber(pageNumber);
  }
  useEffect(async () => {
    const response = await getPageData(pageNumber);
    setTotal(response.total);
    setPageSize(response.per_page);
    setAllUserData(response.data);
  }, [pageNumber]);

  return (
    <div>
      <List
        header={
          <Row>
            <Col span={2}>
              <h3>ID</h3>
            </Col>
            <Col span={4}>
              <h3>Avatar</h3>
            </Col>
            <Col span={10}>
              <h3>Email</h3>
            </Col>
            <Col span={4}>
              <h3>First Name</h3>
            </Col>
            <Col span={4}>
              <h3>Last Name</h3>
            </Col>
          </Row>
        }
        bordered
        dataSource={allUserData}
        renderItem={(item) => (
          <Row>
            <Col span={2}>
              <List.Item>
                <Link to={`/User/${item.id}`}>{item.id}</Link>
              </List.Item>
            </Col>
            <Col span={4}>
              <List.Item>
                <Link to={`/User/${item.id}`}>
                  <Avatar src={item.avatar} />
                </Link>
              </List.Item>
            </Col>
            <Col span={9}>
              <List.Item>{item.email}</List.Item>
            </Col>
            <Col span={4}>
              <List.Item>{item.first_name}</List.Item>
            </Col>
            <Col span={4}>
              <List.Item>{item.last_name}</List.Item>
            </Col>
          </Row>
        )}
      />
      <Pagination
        total={total}
        onChange={onChange}
        defaultPageSize={PageSize}
        defaultCurrent={pageNumber}
      />
    </div>
  );
}

export default UserPage;

{
  /* <List
        size="large"
        itemLayout="horizontal"
        dataSource={allUserData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              description={`${item.first_name} ${item.last_name}`}
              title={item.email}
            />
          </List.Item>
        )}
      /> */
}

// const response = await axios.get(
//   `https://reqres.in/api/users?page=${pageNumber}`
// );
// const Data = response.data.data;
// setAllUserData(Data);
// console.log(allUserData);
