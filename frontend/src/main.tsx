//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// TODO re-enable strict mode iff needed
createRoot(document.getElementById("root")!).render(
  //<StrictMode>
  <App />,
  //</StrictMode>,
);
