// src/views/ForgotPassword.js
import React, { useState } from 'react';
import { Button, TextField, Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handlePasswordReset = (e) => {
    e.preventDefault();

    if (email) {
      alert(`Se ha enviado un enlace de restablecimiento de contraseña a ${email}`);
      navigate('/login'); // Redirige a la página de inicio de sesión después de enviar el enlace
    } else {
      alert('Por favor, ingrese su correo electrónico');
    }
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        {/* Título */}
        <Typography variant="h4" gutterBottom>
          Restablecer Contraseña
        </Typography>

        {/* Instrucciones */}
        <Typography variant="body1" color="textSecondary" align="center" sx={{ marginBottom: 3 }}>
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </Typography>

        {/* Formulario */}
        <form onSubmit={handlePasswordReset} style={{ width: '100%', maxWidth: '400px' }}>
          {/* Campo de correo electrónico */}
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Botón de envío */}
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
              Enviar enlace
            </Button>
          </Box>
        </form>

        {/* Botón para volver a iniciar sesión */}
        <Box display="flex" justifyContent="center" mt={3}>
          <Button
            variant="text"
            onClick={() => navigate('/')}
            sx={{ color: '#B560E1', textDecoration: 'none' }}
          >
            Volver a iniciar sesión
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgotPassword;
