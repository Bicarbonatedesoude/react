// src/context/animal_langue.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface LangueContextProps {
  langue: string;
  changerLangue: (langue: string) => void;
}

const LangueContext = createContext<LangueContextProps>({
  langue: 'fr',
  changerLangue: () => {},
});

export const LangueProvider = ({ children }: { children: ReactNode }) => {
  const [langue, setLangue] = useState<string>('fr');

  const changerLangue = (langue: string) => {
    setLangue(langue);
  };

  return (
    <LangueContext.Provider value={{ langue, changerLangue }}>
      {children}
    </LangueContext.Provider>
  );
};

export const useLangue = () => useContext(LangueContext);
