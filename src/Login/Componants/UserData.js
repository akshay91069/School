import React, { useEffect, useState } from "react";
import { Card, Avatar, Spin } from "antd";
import { useParams } from "react-router-dom";
import { getUserData } from "../Api/Api";
import { Link } from "react-router-dom";
function UserData() {
  const [userData, setUserData] = useState();

  const Data = useParams();
  const ID = Data.id;
  useEffect(async () => {
    const response = await getUserData(ID);
    const Data = await response.data;
    setUserData(Data);
  }, []);
  if (!userData) {
    return <Spin size="large" />;
  }
  return (
    <>
      <Card style={{ width: 300 }}>
        <Link to="/User">Back to home</Link>
        <Avatar src={userData && userData.avatar} size={100} />
        <p>
          Name : {userData && userData.first_name + " " + userData.last_name}
        </p>
        <p>Email : {userData && userData.email}</p>
      </Card>
    </>
  );
}

export default UserData;
