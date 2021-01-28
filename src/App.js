import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./Views/Home/Home";
import { Store } from "./Redux/Store";
import { IndexRouter } from "./Route/IndexRouter";

function App() {
  return (
    <div className="backgroundApp">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <Provider store={Store}>
              <IndexRouter />
            </Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
