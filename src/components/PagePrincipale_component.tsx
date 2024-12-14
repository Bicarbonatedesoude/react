import React from "react";
import AnimalForm from "./AnimalForm_component";
import AnimalList from "./AnimalList_component";
import ModifierAnimal from "./ModifierAnimal_component";

const PagePrincipale: React.FC = () => {
  return (
    <div>
      <h2>Bienvenue sur la page des animaux</h2>
      <AnimalForm /> {/* Formulaire pour ajouter un animal */}
      <AnimalList /> {/* Liste des animaux */}
      <ModifierAnimal /> {/* Formulaire pour modifier un animal */}
    </div>
  );
};

export default PagePrincipale;
