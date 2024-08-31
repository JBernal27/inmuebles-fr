import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { IProperty } from "../../../../../interfaces/property.interface";

const FormProperty: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProperty>();

  // Función para convertir IProperty a FormData
  const convertToFormData = (data: IProperty): FormData => {
    const formData = new FormData();

    // Iterar sobre las propiedades del objeto IProperty
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof IProperty];

      if (key === "image" && value instanceof FileList && value.length > 0) {
        formData.append("image", value[0]); // Agregar archivo al FormData
      } else if (typeof value === "string" || typeof value === "number") {
        formData.append(key, value.toString()); // Convertir a string si es necesario
      } else if (typeof value === "boolean") {
        formData.append(key, value ? "true" : "false"); // Convertir booleano a string
      }
    });

    return formData;
  };

  // Manejo del formulario al enviarlo
  const onSubmit: SubmitHandler<IProperty> = async (data) => {
    const formData = convertToFormData(data);

    try {
      // Enviar los datos al servidor
      const response = await fetch("http://localhost:5000/api/properties", {
        method: "POST",
        body: formData, // Enviar FormData sin especificar Content-Type
      });

      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Property successfully created");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create property");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f2e6d4",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        align="center"
        sx={{ color: "#1976d2", mb: 2 }}
      >
        Create Property
      </Typography>

      {/* Title Field */}
      <TextField
        label="Title"
        {...register("title", { required: "This field is required" })}
        error={!!errors.title}
        helperText={errors.title?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Address Field */}
      <TextField
        label="Address"
        {...register("address", { required: "This field is required" })}
        error={!!errors.address}
        helperText={errors.address?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Description Field */}
      <TextField
        label="Description"
        {...register("description", { required: "This field is required" })}
        error={!!errors.description}
        helperText={errors.description?.message}
        fullWidth
        margin="normal"
        multiline
        rows={3}
        sx={{ borderRadius: 1 }}
      />

      {/* City Field */}
      <TextField
        label="City"
        {...register("city", { required: "This field is required" })}
        error={!!errors.city}
        helperText={errors.city?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Department Field */}
      <TextField
        label="Department"
        {...register("deparment", { required: "This field is required" })}
        error={!!errors.deparment}
        helperText={errors.deparment?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Neighborhood Field */}
      <TextField
        label="Neighborhood"
        {...register("neighborhood", { required: "This field is required" })}
        error={!!errors.neighborhood}
        helperText={errors.neighborhood?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Price Field */}
      <TextField
        label="Price"
        type="number"
        {...register("price", {
          required: "This field is required",
          valueAsNumber: true,
        })}
        error={!!errors.price}
        helperText={errors.price?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Size Field */}
      <TextField
        label="Size"
        type="number"
        {...register("size", {
          required: "This field is required",
          valueAsNumber: true,
        })}
        error={!!errors.size}
        helperText={errors.size?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Bedrooms Field */}
      <TextField
        label="Bedrooms"
        type="number"
        {...register("bedrooms", {
          required: "This field is required",
          valueAsNumber: true,
        })}
        error={!!errors.bedrooms}
        helperText={errors.bedrooms?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Bathrooms Field */}
      <TextField
        label="Bathrooms"
        type="number"
        {...register("bathrooms", {
          required: "This field is required",
          valueAsNumber: true,
        })}
        error={!!errors.bathrooms}
        helperText={errors.bathrooms?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Garage Field */}
      <TextField
        label="Garage"
        type="number"
        {...register("garage", {
          required: "This field is required",
          valueAsNumber: true,
        })}
        error={!!errors.garage}
        helperText={errors.garage?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Property Type ID Field */}
      <FormControl fullWidth margin="normal" error={!!errors.property_type_id}>
        <InputLabel>Property Type ID</InputLabel>
        <Select
          label="Property Type ID"
          defaultValue=""
          {...register("property_type_id", {
            required: "This field is required",
          })}
          sx={{ borderRadius: 1 }}
        >
          <MenuItem value="" disabled>
            Select a property type
          </MenuItem>
          <MenuItem value="1">House</MenuItem>
          <MenuItem value="2">Apartment</MenuItem>
          <MenuItem value="3">Office</MenuItem>
        </Select>
        {errors.property_type_id && (
          <Typography color="error">
            {errors.property_type_id.message}
          </Typography>
        )}
      </FormControl>

      {/* Owner ID Field */}
      <TextField
        label="Owner ID"
        {...register("owner_id", { required: "This field is required" })}
        error={!!errors.owner_id}
        helperText={errors.owner_id?.message}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Status Field */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select
          label="Status"
          defaultValue="available"
          {...register("status")}
          sx={{ borderRadius: 1 }}
        >
          <MenuItem value="available">Available</MenuItem>
          <MenuItem value="reforms">Reforms</MenuItem>
          <MenuItem value="rented">Rented</MenuItem>
        </Select>
      </FormControl>

      {/* Image Field */}
      <TextField
        type="file"
        {...register("image")}
        error={!!errors.image}
        helperText={errors.image ? "This field is required" : ""}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3, py: 1.5, borderRadius: 1 }}
      >
        Create Property
      </Button>
    </Box>
  );
};

export default FormProperty;
