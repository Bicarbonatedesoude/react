import React, { useState, useContext } from "react";
import { AnimalContext } from "../context/Animal.context";

const ModifierAnimal: React.FC = () => {
  const { animaux, setAnimaux } = useContext(AnimalContext) || { animaux: [], setAnimaux: () => {} };
  const [animalToModify, setAnimalToModify] = useState<string>("");
  const [newAnimalName, setNewAnimalName] = useState<string>("");

  const handleModify = () => {
    const updatedAnimaux = animaux.map((animal) =>
      animal === animalToModify ? newAnimalName : animal
    );
    setAnimaux(updatedAnimaux); // Met à jour la liste avec le nouveau nom
  };

  return (
    <div>
      <h2>Modifier un Animal</h2>
      <input
        type="text"
        placeholder="Nom actuel de l'animal"
        value={animalToModify}
        onChange={(e) => setAnimalToModify(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nouveau nom"
        value={newAnimalName}
        onChange={(e) => setNewAnimalName(e.target.value)}
      />
      <button onClick={handleModify}>Modifier</button>
    </div>
  );
};

export default ModifierAnimal;
