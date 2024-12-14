import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AnimalProvider } from "./context/Animal_context";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
            <AnimalProvider>
                <App />
            </AnimalProvider>
    </React.StrictMode>
);
