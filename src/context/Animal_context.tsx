import React, { createContext, useState, ReactNode } from "react";

export type AnimalContextType = {
  animaux: string[]; 
  setAnimaux: React.Dispatch<React.SetStateAction<string[]>>; 
};

export const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

type AnimalProviderProps = {
  children: ReactNode; 
};

export const AnimalProvider: React.FC<AnimalProviderProps> = ({ children }) => {
  const [animaux, setAnimaux] = useState<string[]>([]);

  return (
    <AnimalContext.Provider value={{ animaux, setAnimaux }}>
      {children} {}
    </AnimalContext.Provider>
  );
};
