import React, { createContext, useContext, useState, ReactNode } from "react";

// Définir les types de langue
type Langue = "fr" | "en";

// Créer le contexte
interface LangueContextType {
  langue: Langue;
  changerLangue: (langue: Langue) => void;
}

const LangueContext = createContext<LangueContextType | undefined>(undefined);

// Composant fournisseur
export const LangueProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [langue, setLangue] = useState<Langue>("fr");

  const changerLangue = (langue: Langue) => setLangue(langue);

  return (
    <LangueContext.Provider value={{ langue, changerLangue }}>
      {children}
    </LangueContext.Provider>
  );
};

// accéder au contexte
export const useLangue = (): LangueContextType => {
  const context = useContext(LangueContext);
  if (!context) {
    throw new Error("useLangue doit être utilisé dans un LangueProvider");
  }
  return context;
};

export default LangueProvider;
