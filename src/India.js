import React, { useState, useEffect } from "react";

import _, { values } from "lodash";
import PlaceList from "./PlaceList";
let StateDb = require("./db.json");

function India() {
  const [StateData, setStateData] = useState(StateDb);
  const [StateName, setStateName] = useState([]);
  const [SelectedState, setSelectedState] = useState("Gujarat");
  const [CityName, setCityName] = useState([]);
  const [selectedCity, setSelectedCity] = useState("surat");
  const [PlaceData, setPlaceData] = useState([]);
  const [SelectedRecord, setSelectedRecord] = useState();
  const [searched, setSearched] = useState("");
  const [StateDataAll, setStateDataAll] = useState([]);
  const getStateName = () => {
    let StateName = Object.keys(StateData.State);
    setStateName(StateName);
  };

  const getCityName = () => {
    if (!SelectedState) return;
    let CityNameData = StateData.State[SelectedState];
    setStateDataAll(CityNameData);
    let getCityName = CityNameData.map((name) => {
      return name.City;
    });
    setCityName(getCityName);
  };

  // const getPlaceName = () => {
  //   if (!selectedCity) return;
  //   let getPlaceData =
  //     StateData.State[SelectedState][selectedCity].PlaceToVisit;
  //   setPlaceData(getPlaceData);
  // };

  const Filter = (temp) => {
    if (StateDataAll.length > 0) {
      let FilterCity = StateDataAll.filter((obj) => {
        return obj.City === temp;
      });
      let PlaceData = FilterCity[0].PlaceToVisit;
      setPlaceData(PlaceData);
    }
  };

  useEffect(() => {
    getStateName();
  }, []);

  useEffect(() => {
    getCityName();
  }, [SelectedState]);

  useEffect(() => {
    Filter(selectedCity);
  }, [selectedCity]);

  // EVENT

  const onSelectedRecord = (name) => {
    setSelectedRecord(name);
  };

  const CloseEvent = () => {
    setSelectedRecord(null);
  };

  const InputData = (key, value) => {
    const _InputData = { ...SelectedRecord };
    _InputData[key] = value;
    setSelectedRecord(_InputData);
  };

  const onSaveEvent = () => {
    var Place = _.cloneDeep(PlaceData);

    // for (var i in Place) {
    //   if (Place[i].id == SelectedRecord.id) {
    //     Place[i] = SelectedRecord;
    //   }
    // }

    Place.map((value) => {
      if (value.id == SelectedRecord.id) {
        return Object.assign(value, SelectedRecord);
      }
    });

    setPlaceData(Place);
    setSelectedRecord(null);
  };

  function search(Data) {
    return Data.filter((row) => row.name.toLowerCase().indexOf(searched) > -1);
  }

  return (
    <div>
      <h1>{StateDb.country_name}</h1>
      <select
        value={SelectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {StateName.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <select
        value={selectedCity}
        onChange={(e) => {
          setSelectedCity(e.target.value);
        }}
      >
        {CityName.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })}
      </select>

      <input
        type="text"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
      <PlaceList
        PlaceData={search(PlaceData)}
        onSelectedRecord={onSelectedRecord}
        SelectedRecord={SelectedRecord}
        CloseEvent={CloseEvent}
        InputData={InputData}
        onSaveEvent={onSaveEvent}
      />
    </div>
  );
}

export default India;
