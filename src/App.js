import "./App.scss";
import "antd/dist/antd.css";
import India from "./India";
import Example from "./example/Example";
import Local from "./Local/Local";
import Login from "./Login/Login";
import Home from "./Login/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menubar from "./Login/Menubar";
import Navbar from "./Login/Navbar";
import PrivateRoute from "./Login/PrivateRoute";
import Logout from "./Login/Logout";
import User from "./Login/Componants/UserPage";
import UserData from "./Login/Componants/UserData";
import pageNotFound from "./Login/Componants/pageNotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <PrivateRoute component={Menubar} />
        <PrivateRoute component={Navbar} />

        <Switch>
          <div className="MainContainer">
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/Home" component={Home} />
            <PrivateRoute exact={true} path="/about" component={Local} />
            <PrivateRoute exact={true} path="/Logout" component={Logout} />
            <PrivateRoute exact={true} path="/User" component={User} />
            <PrivateRoute exact={true} path="/User/:id" component={UserData} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
