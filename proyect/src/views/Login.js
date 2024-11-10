// src/views/Login.js
import React, { useState } from 'react';
import { Button, TextField, Container, Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/LogoApp.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
     
      navigate('/profile');
    } else {
      alert('Por favor, ingrese sus credenciales');
    }
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        
        {/* Logo */}
        <img src={logo} alt="LogoApp" style={{ width: '700px', marginBottom: '20px', marginTop: '-95px' }} 
        />

        {/* Título */}
        <Typography variant="h3" gutterBottom sx={{ marginTop: -15 }}>
          Iniciar sesión
        </Typography>
        
        {/* login */}
        <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '400px' }}>

          {/* Correo electrónico */}
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          {/* registro */}
          <Box display="flex" justifyContent="flex-end" mt={0}>
            <Link
              href="#"
              variant="body2"
              sx={{ fontSize: '0.875rem', color: '#B560E1', textDecoration: 'none' }}
              onClick={() => navigate('/register')} 
            >
              ¿No tienes cuenta? Regístrate
            </Link>
          </Box>

          {/* Contraseña */}
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* olvido de contraseña */}
          <Box display="flex" justifyContent="flex-end" mt={0}>
            <Link
              href="#"
              variant="body2"
              sx={{ fontSize: '0.875rem', color: '#B560E1', textDecoration: 'none' }}
              onClick={() => navigate('/contraseña')} 
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>

          {/* Botón  */}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#B560E1',
                borderRadius: '20px',
                minWidth: '170px',
                '&:hover': {
                  backgroundColor: '#D4A0EB',
                },
              }}
            >
              Iniciar sesión
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
