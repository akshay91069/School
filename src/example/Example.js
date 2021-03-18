import React, { useState, useEffect } from "react";

let user = require("./user.json");
function Example() {
  const [userData, setUserData] = useState(user);
  const [userName, setUserName] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [FilterUserData, setFilterUserData] = useState();
  const [inputValue, setInputValue] = useState();

  const FilterAllData = userData.filter((user) => {
    if (user.DOB >= inputValue) {
      return user;
    }
  });

  const FilterData = () => {
    let Data = userData.filter((data) => {
      return data.name === selectedName;
    });
    console.log("DataList:", Data);
    setFilterUserData(Data);
  };

  const getUserName = () => {
    let getUserName = userData.map((name) => {
      return name.name;
    });
    setUserName(getUserName);
  };

  useEffect(() => {
    getUserName();
  }, []);

  useEffect(() => {
    FilterData();
  }, [selectedName]);

  return (
    <div>
      <select
        onChange={(e) => {
          setSelectedName(e.target.value);
        }}
      >
        {userName.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => {}}>Click </button>
    </div>
  );
}

export default Example;
