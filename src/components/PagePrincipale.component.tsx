import React from "react";
import AnimalForm from "./AnimalForm.component";
import AnimalList from "./AnimalList.component";
import ModifierAnimal from "./ModifierAnimal.component";

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
