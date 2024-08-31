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
  image?: FileList;


}

// property-card.component.tsx
