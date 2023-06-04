import "materialize-css/dist/css/materialize.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

//createStore() isn't a real deprecation as its only purpose is
//to encourage the use of Redux Toolkit (which introduces configureStore)
//instead of using createStore directly. This is purposeful decision to use
// plain React Redux without any abstractions like Redux Toolkit.
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
