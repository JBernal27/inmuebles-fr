// import { Box, Grid, Typography } from "@mui/material";
// import { useState, useEffect } from "react";
// import PropertyCard from "./property-card.component";
// import { toPropertyType } from "../../../../utilities/property_type";
// import {IProperty}

// export default function PropertyGrid() {
//     const [properties, setProperties] = useState<IPropertyCard[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchProperties = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/properties');

//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }

//                 const result = await response.json();

//                 if (Array.isArray(result.data)) {
//                     const mappedData: IPropertyCard[] = result.data.map((item: any) => {
//                         return {
//                             id: item.id,
//                             title: item.title,
//                             address: item.address,
//                             description: item.description,
//                             city: item.city,
//                             price: `$${item.price.toLocaleString()}`,
//                             size: item.size,
//                             bedrooms: item.bedrooms,
//                             bathrooms: item.bathrooms,
//                             propertyType: toPropertyType(item.propertyType), // Convierte a PropertyType
//                         };
//                     });

//                     setProperties(mappedData);
//                 } else {
//                     throw new Error('Unexpected data structure');
//                 }

//             } catch (error) {
//                 setError(error instanceof Error ? error.message : 'Unknown error occurred');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProperties();
//     }, []);

//     if (loading) return <Typography variant="h6">Loading...</Typography>;
//     if (error) return <Typography variant="h6" color="error">{error}</Typography>;

//     return (
//         <Box width="100%" component="section" p="20px" position="relative">
//             {properties.length > 0 ? (
//                 <Grid sx={{ flexGrow: 1 }} container spacing={2} columns={3}>
//                     {properties.map((property) => (
//                         <Grid
//                             key={property.id}
//                             item
//                             sx={{
//                                 width: {
//                                     xs: "100%",
//                                     sm: "50%",
//                                     md: "25%",
//                                 },
//                                 minWidth: "200px",
//                             }}
//                         >
//                             <PropertyCard {...property} />
//                         </Grid>
//                     ))}
//                 </Grid>
//             ) : (
//                 <Typography variant="h6">No hay información que mostrar</Typography>
//             )}
//         </Box>
//     );
// }
