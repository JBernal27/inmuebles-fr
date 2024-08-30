// // property-card.component.tsx

// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { IPropertyCard } from "../../../../../interfaces/property.interface";
// import { toPropertyType } from "../../../../utilities/property_type";

// const PropertyCard: React.FC<IPropertyCard> = ({ title, address, description, city, price, size, bedrooms, bathrooms, propertyType }) => {
//     return (
//         <Box border={1} borderRadius="8px" p={2}>
//             <Typography variant="h6">{title}</Typography>
//             <Typography variant="body2">{address}</Typography>
//             <Typography variant="body2">{description}</Typography>
//             <Typography variant="body2">{city}</Typography>
//             <Typography variant="body2">Price: {price}</Typography>
//             <Typography variant="body2">Size: {size} sq ft</Typography>
//             <Typography variant="body2">Bedrooms: {bedrooms}</Typography>
//             <Typography variant="body2">Bathrooms: {bathrooms}</Typography>
//             <Typography variant="body2">Type: {toPropertyType (propertyType)}</Typography>
//         </Box>
//     );
// };

// export default PropertyCard;
