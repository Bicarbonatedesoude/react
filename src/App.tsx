import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Définir le type des données que tu attends de l'API (si tu as un format précis)
interface ApiData {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<ApiData[]>([]);  // Initialisation du state avec un tableau vide

  // Utilisation de useEffect pour récupérer les données depuis l'API
  useEffect(() => {
    axios.get<ApiData[]>('http://localhost:5000/api/route')
  .then((response) => {
    setData(response.data);  // Mise à jour du state avec les données récupérées
  })

      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);  // Le tableau vide [] fait en sorte que l'appel API se fasse uniquement au montage du composant

  return (
    <div>
      <h1>Données de l'API Backend :</h1>
      <ul>
      </ul>
    </div>
  );
};

export default App;
