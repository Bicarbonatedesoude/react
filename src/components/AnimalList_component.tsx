import React, { useContext } from "react";
import { AnimalContext } from "../context/Animal_context";

const AnimalList: React.FC = () => {
  const { animaux } = useContext(AnimalContext) || { animaux: [] }; // Accéder aux animaux du contexte

  return (
    <div>
      <h2>Liste des Animaux</h2>
      <ul>
        {animaux.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
