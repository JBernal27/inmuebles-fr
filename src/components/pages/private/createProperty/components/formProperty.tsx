import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, MenuItem, Box, Typography, Select, FormControl, InputLabel } from '@mui/material';
import { IProperty } from '../../../../../interfaces/property.interface';

const FormProperty: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IProperty>();

  const onSubmit: SubmitHandler<IProperty> = async (data) => {
    console.log("JSON.stringify(data):",JSON.stringify(data))
    await fetch('http://localhost:5000/api/properties/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert("Property successfully created")
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#f2e6d4',
      }}
    >
      {/* Title */}
      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ color: '#1976d2', mb: 2 }}>
        Create Property
      </Typography>
      
      {/* Title Field */}
      <TextField
        label="Title"
        {...register("title", { required: true })}
        error={!!errors.title}
        helperText={errors.title ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Address Field */}
      <TextField
        label="Address"
        {...register("address", { required: true })}
        error={!!errors.address}
        helperText={errors.address ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Description Field */}
      <TextField
        label="Description"
        {...register("description", { required: true })}
        error={!!errors.description}
        helperText={errors.description ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        multiline
        rows={3}
        sx={{ borderRadius: 1 }}
      />

      {/* City Field */}
      <TextField
        label="City"
        {...register("city", { required: true })}
        error={!!errors.city}
        helperText={errors.city ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Department Field */}
      <TextField
        label="Department"
        {...register("deparment", { required: true })}
        error={!!errors.deparment}
        helperText={errors.deparment ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Neighborhood Field */}
      <TextField
        label="Neighborhood"
        {...register("neighborhood", { required: true })}
        error={!!errors.neighborhood}
        helperText={errors.neighborhood ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Price Field */}
      <TextField
        label="Price"
        type="number"
        {...register("price", { required: true ,valueAsNumber: true})}
        error={!!errors.price}
        helperText={errors.price ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Size Field */}
      <TextField
        label="Size"
        type="number"
        {...register("size", { required: true,valueAsNumber: true })}
        error={!!errors.size}
        helperText={errors.size ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Bedrooms Field */}
      <TextField
        label="Bedrooms"
        type="number"
        {...register("bedrooms", { required: true ,valueAsNumber: true})}
        error={!!errors.bedrooms}
        helperText={errors.bedrooms ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Bathrooms Field */}
      <TextField
        label="Bathrooms"
        type="number"
        {...register("bathrooms", { required: true ,valueAsNumber: true})}
        error={!!errors.bathrooms}
        helperText={errors.bathrooms ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Garage Field */}
      <TextField
        label="Garage"
        type="number"
        {...register("garage", { required: true ,valueAsNumber: true})}
        error={!!errors.garage}
        helperText={errors.garage ? 'This field is required' : ''}
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
          {...register("property_type_id", { required: true })}
          sx={{ borderRadius: 1 }}
        >
          <MenuItem value="" disabled>
            Select a property type
          </MenuItem>
          <MenuItem value="1">House</MenuItem>
          <MenuItem value="2">Apartment</MenuItem>
          <MenuItem value="3">Office</MenuItem>
        </Select>
        {errors.property_type_id && <Typography color="error">This field is required</Typography>}
      </FormControl>

      {/* Owner ID Field */}
      <TextField
        label="Owner ID"
        {...register("owner_id", { required: true })}
        error={!!errors.owner_id}
        helperText={errors.owner_id ? 'This field is required' : ''}
        fullWidth
        margin="normal"
        sx={{ borderRadius: 1 }}
      />

      {/* Status Field */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select
          label="Status"
          defaultValue="ACTIVE"
          {...register("status")}
          sx={{ borderRadius: 1 }}
        >
          <MenuItem value="available">available</MenuItem>
          <MenuItem value="reforms">reforms</MenuItem>
          <MenuItem value="rented">rented</MenuItem>
        </Select>
      </FormControl>

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, py: 1.5, borderRadius: 1 }}>
        Create Property
      </Button>
    </Box>
  );
};

export default FormProperty;
