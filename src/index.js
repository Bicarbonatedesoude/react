import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Tu peux aussi créer un fichier CSS pour la mise en forme de ton application.
import App from './App.tsx'; // Ton composant App principal
import { BrowserRouter } from 'react-router-dom'; // Si tu utilises React Router

// Rendu de l'application dans la div avec id 'root' dans index.html
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Si tu utilises React Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') // L'élément racine du fichier index.html
);
