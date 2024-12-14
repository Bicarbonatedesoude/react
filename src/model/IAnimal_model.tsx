export interface IVaccin {
  nom: string;
  date: Date;
  renouvellement?: Date; 
}

export interface IAnimal {
  _id?: string;
  nom: string;
  type: string;
  race: string;
  age: number;
  poids: number;
  sterilise: boolean;
  dateNaissance: Date;
  historiqueVaccins?: IVaccin[]; 
  observations?: string;      
}
