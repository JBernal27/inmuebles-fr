// interfaces/property.interface.ts

export interface IProperty {
  id: string; // Agrega el campo `id` si no existe
  title: string;
  description: string;
  address: string;
  city: string;
  deparment:string
  neighborhood:string
  price: number; // Asegúrate de que el tipo sea correcto
  size: number;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  status?: "ACTIVE" | "INACTIVE";
  property_type_id: string;
  owner_id: string;
  image: FileList
  media: {
    // Asegúrate de que esta estructura coincida con tus datos
    url: string;
    media_type: string;
  }[];
}

export enum PropertyType {
  HOUSE = "house",
  APARTMENT = "apartment",
  OFFICE = "office",
}

export interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  description: string;
  city: string;
  price: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: PropertyType;
  imageUrl: string;
   // Asegúrate de que esta propiedad esté incluida
}

