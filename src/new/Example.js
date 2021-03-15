import React, { useState, useEffect } from "react";
import TableList from "./TableList";
let StateDb = require("../db.json");
function Example() {
  const [StateData, setStateData] = useState(StateDb);
  const [StateName, setStateName] = useState([]);
  const [selStatName, setSelStatName] = useState("Gujarat");
  const [StateCityData, setStateCityData] = useState([]);
  const [selCityName, setSelCityName] = useState("surat");
  const [StateDataAll, setStateDataAll] = useState([]);
  const [FilterData, setFilterData] = useState([]);
  const [Selected, setSelected] = useState();
  useEffect(() => {
    getStateName();
  }, []);

  useEffect(() => {
    getStateCityData();
  }, [selStatName]);

  useEffect(() => {
    Filter(selCityName);
  }, [selCityName]);

  const getStateName = () => {
    let StateName = Object.keys(StateData.State);
    setStateName(StateName);
  };

  const getStateCityData = () => {
    if (!selStatName) return;
    let getStateCityData = StateData.State[`${selStatName}`];
    setStateDataAll(getStateCityData);
    let getCityName = getStateCityData.map((name) => {
      return name.City;
    });
    setStateCityData(getCityName);
  };

  const Filter = (temp) => {
    if (StateDataAll.length > 0) {
      let FilterCity = StateDataAll.filter((obj) => {
        return obj.City === temp;
      });
      let PlaceData = FilterCity[0].PlaceToVisit;
      setFilterData(PlaceData);
    }
  };

  //Event
  const onSelectHandler = (val) => {
    setSelected(val);
  };

  return (
    <div>
      <select
        onChange={(e) => setSelStatName(e.target.value)}
        value={selStatName}
      >
        {StateName.map((val, index) => {
          return (
            <option key={index} value={val}>
              {val}
            </option>
          );
        })}
      </select>
      <select
        value={selCityName}
        onChange={(e) => setSelCityName(e.target.value)}
      >
        {StateCityData.map((val, index) => {
          return (
            <option value={val} key={index}>
              {val}
            </option>
          );
        })}
      </select>
      <TableList
        Data={FilterData}
        onSelectHandler={onSelectHandler}
        Selected={Selected}
      />
    </div>
  );
}

export default Example;
