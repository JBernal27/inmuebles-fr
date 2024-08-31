// components/property-grid.component.tsx
import React, { useState, useEffect } from 'react';
import PropertyCard from './property-card.component';
import { toPropertyType } from '../../../../utilities/property_type';
import { IProperty } from '../../../../../interfaces/property.interface';
import { PropertyType } from '../../../../../interfaces/property.interface'; // Asegúrate de importar PropertyType
import { Box, Grid } from '@mui/material';
import { PropertyCardProps } from '../../../../../interfaces/property.interface';

interface PropertyCardData {
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
}

const PropertyGrid: React.FC = () => {
  const [properties, setProperties] = useState<PropertyCardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result.data);

        if (Array.isArray(result.data)) {
          const mappedData: PropertyCardData[] = result.data.map((item: IProperty) => ({
            id: item.owner_id, // Asume que `owner_id` es el identificador único
            title: item.title,
            address: item.address,
            description: item.description,
            city: item.city,
            price: `$${item.price.toLocaleString()}`,
            size: item.size,
            bedrooms: item.bedrooms,
            bathrooms: item.bathrooms,
            propertyType: toPropertyType(item.property_type_id) as PropertyType // Asegúrate de que `toPropertyType` devuelva un tipo válido
          }));

          setProperties(mappedData);
        } else {
          throw new Error('Unexpected data structure');
        }

      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <Box width="100%" component="section" p="20px" position="relative">
            {properties.length > 0 ? (
                <Grid sx={{ flexGrow: 1 }} container spacing={2} columns={3}>
                    {properties.map((property:  PropertyCardProps) => (
                        <Grid
                            key={property.id}
                            item
                            sx={{
                                width: {
                                    xs: "100%",
                                    sm: "50%",
                                    md: "33.33%",
                                },
                                minWidth: "200px",
                            }}
                        >
                            <PropertyCard {...property} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <h3>No hay informacion que mostrar</h3>
            )}
 </Box>
  );
};

export default PropertyGrid;
