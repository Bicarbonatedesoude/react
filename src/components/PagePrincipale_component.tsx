import React from "react";
import AnimalForm from "./AnimalForm_component";
import AnimalList from "./AnimalList_component";
import ModifierAnimal from "./ModifierAnimal_component";

const PagePrincipale: React.FC = () => {
  return (
    <div>
      <h2>Bienvenue sur la page des animaux</h2>
      <AnimalForm /> {}
      <AnimalList /> {}
      <ModifierAnimal /> {}
    </div>
  );
};

export default PagePrincipale;
