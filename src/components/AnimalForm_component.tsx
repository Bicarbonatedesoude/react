import React, { useState, useContext } from "react";
import { AnimalContext } from "../context/Animal_context";

const AnimalForm: React.FC = () => {
  const [animal, setAnimal] = useState<string>(""); 
  const { animaux, setAnimaux } = useContext(AnimalContext) || { animaux: [], setAnimaux: () => {} };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (animal) {
      // Ajouter le nouvel animal à la liste
      setAnimaux((prevAnimaux) => [...prevAnimaux, animal]); 
      setAnimal(""); // Réinitialiser l'input
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
      
      <h3>Liste des Animaux</h3>
      <ul>
        {animaux.length === 0 ? (
          <p>Aucun animal ajouté.</p>
        ) : (
          animaux.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AnimalForm;
