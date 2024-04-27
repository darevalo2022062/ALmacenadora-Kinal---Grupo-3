<<<<<<< HEAD

import ReactDOM from "react-dom/client";
import {App} from "./App.jsx";
=======
>>>>>>> e9271616cf3bdd24dc65b5f28da43f2257f77991
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
