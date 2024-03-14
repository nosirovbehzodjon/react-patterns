import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CounterProvider } from "./context/counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
