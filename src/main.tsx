import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AnimalProvider } from "./context/Animal_context";
import { IntlProvider } from 'react-intl';
import Francais from './lang/fr.json';

const locale = 'fr'; // Langue actuelle
const messages = Francais;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
            <AnimalProvider>
            <IntlProvider locale={locale} messages={messages}>
            <App />
            </IntlProvider>
            </AnimalProvider>
    </React.StrictMode>
);
