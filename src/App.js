import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Playlist from "./Components/Playlist";
import Footer from "./Components/Footer";
import SelectedPlayList from "./Components/SelectedPlayList";
import "./App.css";
// import * from "@material-ui/core";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <div className="row" style={{ height: "100vh" }}>
            <div className="col-2 PlayList">
              <Playlist />
            </div>
            <div className="col-10">
              <Route path="/" exact component={Home} />
              <Route
                path="/SelectedPlayList/:id"
                exact
                component={SelectedPlayList}
              />
            </div>
          </div>
        </Switch>
      </BrowserRouter>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          width: "100%",
        }}
      >
        <Footer />
      </div>
    </>
  );
}

export default App;
