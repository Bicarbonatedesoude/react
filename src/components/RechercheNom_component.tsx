import React, { useState, useContext } from "react";
import { AnimalContext } from "../context/Animal_context";

const RechercheNom: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { animaux } = useContext(AnimalContext) || { animaux: [] };

  const filteredAnimals = animaux.filter((animal) =>
    animal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Rechercher un Animal</h2>
      <input
        type="text"
        placeholder="Nom de l'animal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
};

export default RechercheNom;
