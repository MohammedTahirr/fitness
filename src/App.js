import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
