import React, { useState, useContext } from "react";
import { AnimalContext } from "../context/Animal.context";

const AnimalForm: React.FC = () => {
  const [animal, setAnimal] = useState<string>(""); // État pour le nom de l'animal
  const { animaux, setAnimaux } = useContext(AnimalContext) || { animaux: [], setAnimaux: () => {} }; // Accéder à setAnimaux du contexte

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (animal) {
      setAnimaux((prevAnimaux) => [...prevAnimaux, animal]); // Ajouter un nouvel animal à la liste
      setAnimal(""); // Réinitialiser le champ du formulaire
    }
  };

  return (
    <div>
      <h2>Ajouter un Animal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de l'animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AnimalForm;
