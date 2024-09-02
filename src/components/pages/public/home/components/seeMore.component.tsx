import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import BedIcon from "@mui/icons-material/Bed";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GarageIcon from "@mui/icons-material/Garage";
import HouseIcon from "@mui/icons-material/House";

interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
  property: {
    title: string;
    city: string;
    price: string;
    size: number;
    bedrooms: number;
    bathrooms: number;
    propertyType: string;
    imageUrl: string;
    description: string;
  };
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  onClose,
  property,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          display: "flex",
          gap: 2,
          textTransform: "capitalize",
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            width: "50%",
            maxWidth: 400,
            height: "auto",
          }}
        >
          <img
            src={property.imageUrl}
            alt={property.title}
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            id="modal-title"
            variant="h6"
            component="h1"
            style={{
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            {property.title}
          </Typography>
          <Box display="flex" alignItems="center" gap={1} mt={2}>
            <LocationOnIcon sx={{ fontSize: 20 }} />
            <Typography>{property.city}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <AttachMoneyIcon sx={{ fontSize: 20 }} />
            <Typography>{property.price}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <AspectRatioIcon sx={{ fontSize: 20 }} />
            <Typography>
              {property.size} m<sup>2</sup>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <BedIcon sx={{ fontSize: 20 }} />
            <Typography>
              {property.bedrooms} Habitaci{property.bedrooms > 1 ? "ones" : "ón"}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <BathroomOutlinedIcon sx={{ fontSize: 20 }} />
            <Typography>
              {property.bathrooms} Baño{property.bathrooms > 1 ? "s" : ""}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <GarageIcon sx={{ fontSize: 20 }} />
            <Typography>Garage</Typography>{" "}
          </Box>
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <HouseIcon sx={{ fontSize: 20 }} />
            <Typography>{property.propertyType}</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="body1">
              <strong>Description:</strong> {property.description}
            </Typography>
            <Typography paragraph></Typography>
          </Box>
          <Box
            display="flex"
            gap={2}
            mt={3}
            justifyContent="center" // Centra los botones horizontalmente
          >
            <Button
              onClick={onClose}
              variant="contained"
              color="secondary"
              sx={{ width: "40%" }}
            >
              Close
            </Button>
            <Button
              onClick={onClose}
              variant="contained"
              color="secondary"
              sx={{ width: "40%" }}
            >
              Contact
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
