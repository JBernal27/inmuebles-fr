export interface IProperty {
  title: string;
  address: string;
  description: string;
  city: string;
  deparment: string; // Corrige el nombre de "deparment" a "department"
  neighborhood: string;
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  property_type_id: string; // Puede ser un número si se convierte a string en el frontend
  owner_id: string;
  status?: "ACTIVE" | "INACTIVE";
}

export enum PropertyType {
  HOUSE = "house",
  APARTMENT = "apartment",
  OFFICE = "office"
}

export interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  description: string;
  city: string;
  price: string; // Precio como string para compatibilidad con IProperty
  size: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: PropertyType;
}




