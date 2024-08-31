// utils/property-utils.ts

import { PropertyType } from "../../interfaces/property.interface";



export const toPropertyType = (typeId: string): PropertyType => {
  switch (typeId) {
    case '1':
      return PropertyType.HOUSE;
    case '2':
      return PropertyType.APARTMENT;
    case '3':
      return PropertyType.OFFICE;
    default:
      throw new Error(`Unknown property type ID: ${typeId}`);
  }
};
