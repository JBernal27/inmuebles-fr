import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Typography,
} from "@mui/material";
import {
  Description,
  BedroomParent,
  Bathroom,
  Garage,
  Home,
  LocationCity,
  AttachMoney,
  Store,
} from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
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
        maxWidth: 1000,
        mx: "auto",
        mt: 10,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,

        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        align="center"
        sx={{ color: "", mb: 2, fontWeight: "bold", fontSize: 35 , marginBottom: 7}}
      >
        Create Property
      </Typography>

      <Grid container spacing={2}>
        {/* Title Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Title"
            fullWidth
            {...register("title", { required: "This field is required" })}
            error={!!errors.title}
            helperText={errors.title?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Home />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Address Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Address"
            fullWidth
            {...register("address", { required: "This field is required" })}
            error={!!errors.address}
            helperText={errors.address?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCity />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Description Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={1}
            {...register("description", { required: "This field is required" })}
            error={!!errors.description}
            helperText={errors.description?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Description />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* City Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            fullWidth
            {...register("city", { required: "This field is required" })}
            error={!!errors.city}
            helperText={errors.city?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCity />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Department Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Department"
            fullWidth
            {...register("deparment", { required: "This field is required" })}
            error={!!errors.deparment}
            helperText={errors.deparment?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Store />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Neighborhood Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Neighborhood"
            fullWidth
            {...register("neighborhood", {
              required: "This field is required",
            })}
            error={!!errors.neighborhood}
            helperText={errors.neighborhood?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCity />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Price Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Price"
            type="number"
            fullWidth
            {...register("price", {
              required: "This field is required",
              valueAsNumber: true,
            })}
            error={!!errors.price}
            helperText={errors.price?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoney />
                </InputAdornment>
              ),
            }}
          />
        </Grid>


        {/* Size Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Size"
            type="number"
            fullWidth
            {...register("size", {
              required: "This field is required",
              valueAsNumber: true,
            })}
            error={!!errors.size}
            helperText={errors.size?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Store />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
      {/* Size Field */}
      <TextField
        label="Size m2"
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
        <Grid item xs={12} sm={6}>
          <TextField
            label="Bedrooms"
            type="number"
            fullWidth
            {...register("bedrooms", {
              required: "This field is required",
              valueAsNumber: true,
            })}
            error={!!errors.bedrooms}
            helperText={errors.bedrooms?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BedroomParent />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Bathrooms Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Bathrooms"
            type="number"
            fullWidth
            {...register("bathrooms", {
              required: "This field is required",
              valueAsNumber: true,
            })}
            error={!!errors.bathrooms}
            helperText={errors.bathrooms?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Bathroom />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Garage Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Garage"
            type="number"
            fullWidth
            {...register("garage", {
              required: "This field is required",
              valueAsNumber: true,
            })}
            error={!!errors.garage}
            helperText={errors.garage?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Garage />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Owner ID Field */}
        <Grid item xs={6}>
          <TextField
            label="Owner"
            fullWidth
            {...register("owner_id", { required: "This field is required" })}
            error={!!errors.owner_id}
            helperText={errors.owner_id?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Property Type ID Field */}
        <Grid item xs={12}>
          <FormControl
            fullWidth
            margin="normal"
            error={!!errors.property_type_id}
          >
            <InputLabel>Property Type ID</InputLabel>
            <Select
              label="Property Type ID"
              defaultValue=""
              {...register("property_type_id", {
                required: "This field is required",
              })}
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
        </Grid>

        {/* Image Field */}
        <Grid item xs={12}>
          <TextField
            label="Image"
            type="file"
            fullWidth
            {...register("image")}
            error={!!errors.image}
            helperText={errors.image?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Description />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default FormProperty;
