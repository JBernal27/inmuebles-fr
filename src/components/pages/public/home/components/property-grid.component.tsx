import React, { useState, useEffect } from "react";
import PropertyCard from "./property-card.component";
import { toPropertyType } from "../../../../utilities/property_type";
import { IProperty } from "../../../../../interfaces/property.interface";
import { PropertyType } from "../../../../../interfaces/property.interface";
import { Box, Grid } from "@mui/material";
import ModalComponent from "./seeMore.component"; // Importa el componente del modal

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
  imageUrl: string;
}

const PropertyGrid: React.FC = () => {
  const [properties, setProperties] = useState<PropertyCardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] =
    useState<PropertyCardData | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/properties");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result.data);

        if (Array.isArray(result.data)) {
          const mappedData: PropertyCardData[] = result.data.map(
            (item: IProperty) => ({
              id: item.id,
              title: item.title,
              address: item.address,
              description: item.description,
              city: item.city,
              price: `$${item.price.toLocaleString()}`,
              size: item.size,
              bedrooms: item.bedrooms,
              bathrooms: item.bathrooms,
              propertyType: toPropertyType(
                item.property_type_id
              ) as PropertyType,
              imageUrl: item.media.length > 0 ? item.media[0].url : "",
            })
          );

          setProperties(mappedData);
        } else {
          throw new Error("Unexpected data structure");
        }
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSeeMore = (id: string) => {
    const property = properties.find((prop) => prop.id === id);
    if (property) {
      setSelectedProperty(property);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <Box width="100%" component="section" p="20px" position="relative">
      {properties.length > 0 ? (
        <Grid sx={{ flexGrow: 1 }} container spacing={2} columns={3}>
          {properties.map((property) => (
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
              <PropertyCard {...property} onSeeMore={handleSeeMore} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <h3>No hay información que mostrar</h3>
      )}
      {selectedProperty && (
        <ModalComponent
          open={modalOpen}
          onClose={handleCloseModal}
          property={selectedProperty}
        />
      )}
    </Box>
  );
};

export default PropertyGrid;
