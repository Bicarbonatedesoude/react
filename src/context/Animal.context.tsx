import React, { createContext, useState, ReactNode } from "react";

// Type pour le contexte
export type AnimalContextType = {
  animaux: string[]; // Liste des animaux sous forme de tableau de chaînes
  setAnimaux: React.Dispatch<React.SetStateAction<string[]>>; // Fonction pour modifier la liste des animaux
};

// Créer le contexte
export const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

type AnimalProviderProps = {
  children: ReactNode; // Type des enfants du fournisseur
};

// Le fournisseur de contexte
export const AnimalProvider: React.FC<AnimalProviderProps> = ({ children }) => {
  // Initialisation de la liste des animaux (vide au début)
  const [animaux, setAnimaux] = useState<string[]>([]);

  return (
    <AnimalContext.Provider value={{ animaux, setAnimaux }}>
      {children} {/* Fournir le contexte à toute l'application */}
    </AnimalContext.Provider>
  );
};
