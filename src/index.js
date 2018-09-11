import React from "react";
import ReactDOM from "react-dom";
import Dogs from "./Dogs";
import "./styles.css";

// Redux imports
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./reducers/index";
import { watcherSaga } from "./sagas";

// create the Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Redux devtool extension
const devTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    devTool
  )
);

sagaMiddleware.run(watcherSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dogs />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
