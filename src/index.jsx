import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./i18n"; // Import the i18n configuration

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);