import axios from "axios";
import React, { useState } from "react";
import { Input } from "antd";
import { useHistory } from "react-router-dom";
function Login() {
  let History = useHistory();
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const onInputHandler = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async () => {
    const response = await axios.post("https://reqres.in/api/login", LoginData);
    const Data = response.data;

    localStorage.setItem("token", JSON.stringify(Data));
    History.push("/Home");
  };

  return (
    <div className="form_div">
      <div className="form">
        <h1>cityslicka</h1>
        <Input
          placeholder="input email"
          className="inp"
          name="email"
          value={LoginData.email}
          onChange={onInputHandler}
        />
        <Input.Password
          placeholder="input password"
          className="inp"
          name="password"
          value={LoginData.password}
          onChange={onInputHandler}
        />
        <button className="btn_submit" onClick={onSubmitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
