import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";
import TaskInput from "./Components/TaskInput.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TaskInput />
  </Provider>
);
