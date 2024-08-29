import { Box, Typography } from "@mui/material";
import headerImg from "../../../../../assets/images/header.jpg"

export default function Header() {
    return (
        <Box
            component="div"
            sx={{
                width: "100vw",
                height: "400px",
                background: `linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 100%), url(${headerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center",
                gap: 2
            }}
        >
            <Typography variant="h1">Encuentra tu hogar ideal</Typography>
            <Typography variant="subtitle1">Ofrecemos las Mejores Propiedades en Arrendamiento para Cada Estilo de Vida y Presupuesto</Typography>
        </Box>
    )
}
