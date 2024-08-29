import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import PropertyCard from "./property-card.component";
import { IPropertyCard } from "../../../../../interfaces/property.interface";

export default function PropertyGrid() {
    const [properties, setProperties] = useState<IPropertyCard[]>([]);

    const fakeProperties: IPropertyCard[] = [
        {
            id: 1,
            city: "Itagüí",
            region: "Antioquia",
            size: 54,
            rooms: 3,
            bathrooms: 2,
            price: "$150,000,000",
            type: "Apartamento"
        },
        {
            id: 2,
            city: "Medellín",
            region: "Antioquia",
            size: 80,
            rooms: 2,
            bathrooms: 1,
            price: "$200,000,000",
            type: "Casa"
        },
        {
            id: 3,
            city: "Envigado",
            region: "Antioquia",
            size: 60,
            rooms: 3,
            bathrooms: 2,
            price: "$180,000,000",
            type: "Apartamento"
        },
        {
            id: 4,
            city: "Sabaneta",
            region: "Antioquia",
            size: 45,
            rooms: 1,
            bathrooms: 1,
            price: "$120,000,000",
            type: "Local"
        },
        {
            id: 5,
            city: "Bello",
            region: "Antioquia",
            size: 100,
            rooms: 4,
            bathrooms: 3,
            price: "$250,000,000",
            type: "Casa"
        },
        {
            id: 6,
            city: "La Estrella",
            region: "Antioquia",
            size: 70,
            rooms: 2,
            bathrooms: 1,
            price: "$170,000,000",
            type: "Apartamento"
        },
        {
            id: 7,
            city: "Copacabana",
            region: "Antioquia",
            size: 35,
            rooms: 1,
            bathrooms: 1,
            price: "$100,000,000",
            type: "Local"
        }
    ];
    

    useEffect(() => {
        setProperties(fakeProperties);
    }, []);

    return (
        <Box width="100%" component="section" p="20px" position="relative">
            {properties.length > 0 ? (
                <Grid sx={{ flexGrow: 1 }} container spacing={2} columns={3}>
                    {properties.map((property: IPropertyCard) => (
                        <Grid
                            key={property.id}
                            item
                            sx={{
                                width: {
                                    xs: "100%",
                                    sm: "50%",
                                    md: "25%",
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
}
