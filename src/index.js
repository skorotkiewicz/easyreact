import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from "./_reducers";
import * as actions from "./_actions";

// Redux devtools only in development
if (process.env.NODE_ENV === "development") {
  const composeEnhancers = composeWithDevTools({
    actions,
    trace: true,
    traceLimit: 25,
  });
  var store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(allReducer, applyMiddleware(thunk));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
// reportWebVitals(console.log);
