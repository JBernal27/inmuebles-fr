import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import BedIcon from '@mui/icons-material/Bed';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import { Box } from '@mui/material';
import { IPropertyCard } from '../../../../../interfaces/property.interface';

export default function PropertyCard({
    id,
    city,
    region,
    size,
    rooms,
    bathrooms,
    price,
    type
}: IPropertyCard) {
    console.log(id);
    return (
        <Card sx={{ width: "100%", height: "350px" }}>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <Box display={'flex'} flexDirection={"column"} justifyContent={"space-around"} height={"100%"} >
                <Box display={'flex'} gap={0.5} alignItems={"center"}>
                    <LocationOnIcon sx={{ fontSize: 20 }} />
                    <Typography fontSize={16} fontWeight={600}>
                        {city}, {region} - {type}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <AspectRatioIcon sx={{ fontSize: 20 }} />
                    <Typography level="body-sm">
                        {size}m<sup>2</sup>
                    </Typography>
                    <BedIcon sx={{ fontSize: 20 }} />
                    <Typography level="body-sm">
                        {rooms} Habitacion{rooms>1 && "es"}
                    </Typography>
                    <BathroomOutlinedIcon sx={{ fontSize: 20 }} />
                    <Typography level="body-sm">
                        {bathrooms} Baño{bathrooms>1 && "s"}
                    </Typography>
                </Box>
            </Box>
            <CardContent orientation="horizontal" sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                    variant="solid"
                    size="md"
                    color="neutral"
                    aria-label="Ver Más"
                    sx={{ alignSelf: 'center', fontWeight: 600, width: "40%" }}
                >
                    Ver Más
                </Button>
                <Box alignSelf={"center"}>
                    <Typography level="body-xs">Precio:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {price}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
