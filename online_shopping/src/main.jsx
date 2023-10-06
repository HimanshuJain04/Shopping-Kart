import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Context";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContext>
      <div>
        <App />
        <ToastContainer />
      </div>
    </AppContext>
  </BrowserRouter>
);
