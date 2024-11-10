// src/views/Register.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Todos los campos son requeridos.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Aquí iría la lógica de registro (llamada a API, validación, etc.)
    // Si es exitoso, se puede redirigir al usuario a otra página, como el login
    navigate('/');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Registro
        </Typography>

        {error && (
          <Typography variant="body1" color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Nombre de Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
          <TextField
            label="Confirmar Contraseña"
            variant="outlined"
            fullWidth
            margin="normal"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#B560E1',
              marginTop: 2,
              '&:hover': {
                backgroundColor: '#D4A0EB'
              }
            }}
          >
            Registrarse
          </Button>
        </form>

        <Button
          sx={{
            marginTop: 2,
            color: '#B560E1',
            '&:hover': {
              backgroundColor: '#D4A0EB'
            }
          }}
          onClick={() => navigate('/')}
        >
          ¿Ya tienes cuenta? Inicia sesión
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
